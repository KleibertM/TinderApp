Tinder Clone App
Descripción
Este proyecto es un clon funcional de Tinder, desarrollado como una aplicación web para practicar y demostrar habilidades en desarrollo front-end y back-end. La aplicación permite a los usuarios deslizar tarjetas con perfiles, y tomar decisiones basadas en la apariencia y la información básica del perfil, al igual que la versión original de Tinder.

Características
Deslizar Tarjetas: Los usuarios pueden deslizar a la izquierda (NOPE) o a la derecha (LIKE) en los perfiles.
Perfiles Dinámicos: Los perfiles se generan dinámicamente a partir de un archivo JSON.
Interfaz de Usuario Responsiva: Diseño adaptativo que asegura una experiencia de usuario óptima en dispositivos móviles y de escritorio.
Alerta de Fin de Perfiles: Cuando no hay más perfiles disponibles, se muestra un mensaje indicativo.
Tecnologías Utilizadas
HTML5: Estructura de la aplicación.
CSS3: Estilización y diseño responsivo.
JavaScript (Vanilla): Lógica para la interacción con los perfiles y manejo de eventos.
Fetch API: Para la carga dinámica de perfiles desde un archivo JSON.
Estructura del Proyecto
bash
Copiar código
/project-folder
  - index.html        # Página principal
  - data.js           # Script para cargar y renderizar perfiles
  - events.js         # Script para manejar eventos de interacción
  - data.json         # Archivo JSON con los datos de los perfiles
  - /photos           # Carpeta con las imágenes de perfil
  - /css              # Carpeta con los estilos CSS
Instalación y Ejecución
Clonar el repositorio:

bash
Copiar código
git clone https://github.com/tu-usuario/tinder-clone.git
Navegar al directorio del proyecto:

bash
Copiar código
cd tinder-clone
Abrir index.html en tu navegador:

Puedes abrir el archivo directamente en tu navegador o utilizar un servidor local para una mejor experiencia de desarrollo.
Si estás utilizando VSCode, puedes usar la extensión "Live Server" para iniciar un servidor local.
Uso
Al abrir la aplicación, los perfiles de usuario se mostrarán en tarjetas.
Puedes deslizar las tarjetas a la izquierda ("NOPE") o a la derecha ("LIKE") para interactuar con los perfiles.
Si no hay más perfiles disponibles, se mostrará un mensaje indicando que no hay más personas cerca.
Futuras Mejoras
Autenticación de Usuarios: Implementar un sistema de inicio de sesión para personalizar la experiencia del usuario.
Base de Datos: Migrar los datos de perfiles a una base de datos para manejo de usuarios en tiempo real.
Interacción en Tiempo Real: Mejorar la aplicación para permitir el emparejamiento en tiempo real entre usuarios.
Notificaciones: Agregar notificaciones push para mantener a los usuarios informados de nuevos emparejamientos.
Contribuciones
Las contribuciones son bienvenidas. Si deseas mejorar este proyecto o agregar nuevas funcionalidades, sigue estos pasos:

Haz un fork del proyecto.
Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y haz commit (git commit -m 'Agregar nueva funcionalidad').
Sube tus cambios (git push origin feature/nueva-funcionalidad).
Abre un Pull Request.
Licencia
Este proyecto está licenciado bajo la MIT License.