fetch('data.json')
.then(response => response.json())
.then(data => {
    // Obtener el contenedor de las tarjetas
    const cardsContainer = document.querySelector('.cards');

    // Iterar sobre cada persona en el JSON
    data.personas.forEach(persona => {
        // Crear un nuevo artículo para cada persona
        const article = document.createElement('article');
        article.innerHTML = `
            <img src="${persona.imagen}" alt="${persona.nombre}, ${persona.edad} years old">
            <h2>${persona.nombre} <span>${persona.edad}</span></h2>
            <div class="choice nope">NOPE</div>
            <div class="choice like">LIKE</div>
        `;
        // Agregar el nuevo artículo al contenedor
        cardsContainer.appendChild(article);
    });

    // Agregar un mensaje al final si no hay más personas
    const noMoreMessage = document.createElement('span');
    noMoreMessage.innerHTML = `
        No hay más personas cerca de ti... <br>
        espera unos minutos mientras buscamos.
    `;
    cardsContainer.appendChild(noMoreMessage);
})
.catch(error => console.error('Error al cargar el JSON:', error));