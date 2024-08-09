// const Data = require('./connetData.js');
const DECISION_THRESHOLD = 70;
let isAnimating = false;

let pullDeltaX = 0; //Distancia a la que la card se esta moviendo

function startDrag(e) {
    if (isAnimating) return

    //get the first article element
    const actualCard = e.target.closest('article')
    if (!actualCard) return

    const startX = e.pageX ?? e.touches[0].pageX


    //Listen the mouse and touch events
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onEnd)

    document.addEventListener('touchmove', onMove, { passive: true })
    document.addEventListener('touchend', onEnd, { passive: true })

    function onMove(e) {
        //current position
        const currentX = e.pageX ?? e.touches[0].pageX

        pullDeltaX = currentX - startX

        if (pullDeltaX === 0) return

        isAnimating = true
        const deg = pullDeltaX / 20

        //update the position of the card
        actualCard.style.transform = `translateX(${pullDeltaX}px) rotate(${deg}deg)`
        actualCard.style.cursor = 'grabbing'

        const opacity = Math.abs(pullDeltaX) / 100
        const isRight = pullDeltaX > 0;

        const choiceEl = isRight
            ? actualCard.querySelector('.choice.like')
            : actualCard.querySelector('.choice.nope')

        choiceEl.style.opacity = opacity
        // choiceEl.style.transform = `translateX(${isRight? -opacity * 100 : opacity * 100}px)`
        // choiceEl.style.transition = 'opacity 0.2s, transform 0.2s'

    }

    function onEnd(e) {
        //stop listening the events
        document.removeEventListener('mousemove', onMove)
        document.removeEventListener('mouseup', onEnd)

        document.removeEventListener('touchmove', onMove)
        document.removeEventListener('touchend', onEnd)

        const decisionMade = Math.abs(pullDeltaX) >= DECISION_THRESHOLD

        if (decisionMade) {
            const goRight = pullDeltaX >= 0
            // const goLeft = !goRight

            actualCard.classList.add(goRight ? 'go-right' : 'go-left')
            actualCard.addEventListener('transitionend', () => {
                actualCard.remove()
            })
        } else {
            actualCard.classList.add('reset')
            actualCard.classList.remove('go-right', 'go-left')
            actualCard.querySelectorAll('.choice').forEach(choice => {
                choice.style.opacity = 0
            })
        }

        actualCard.addEventListener('transitionend', () => {
            actualCard.removeAttribute('style')
            actualCard.classList.remove('reset')
            pullDeltaX = 0
            isAnimating = false
        })

        actualCard
            .querySelectorAll(".choice")
            .forEach((el) => (el.style.opacity = 0));
    }
}


document.addEventListener('mousedown', startDrag)
document.addEventListener('touchstart', startDrag, { passive: true })