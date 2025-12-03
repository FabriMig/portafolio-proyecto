const PROYECTOS = [
    {
        nombre: "Tarea Programada 1: Simulador batallas pokemon",
        descripcion: "Un simulador de batalla de Pokemones en la línea de comandos creado con programación orientada a objetos",
        tech: "Tecnologías: Java, POO, Diagramas UML",
        imgUrl: "assets/pokemon.webp",
        link: "https://github.com/gabtor01/nullStackDevs-PH1/tree/main/pokemon"
    },
    {
        nombre: "Tarea Programada 2: Tetris en consola utilizando POO",
        descripcion: "Una implementación del clásico juego Tetris en la línea de comandos utilizando principios de programación orientada a objetos.",
        tech: "Tecnologías: Java, POO, Diagramas UML",
        imgUrl: "assets/tetris.png",
        link: "https://github.com/gabtor01/nullStackDevs-PH1/tree/main/tetris"
    },
    {
        nombre: "Web para resolver ecuaciones",
        descripcion: "Página web y API para resolver ecuaciones de primer grado creada desde cero",
        tech: "Tecnologías: TypeScript, Nodejs, React, Express",
        imgUrl: "assets/equationWeb.webp",
        link: "https://github.com/FabriMig/equations-web"
    },
    {
        nombre: "SGA",
        descripcion: "Página web y app para agilizar procesos administrativos y aumentar la disponibilidad de contenido en escuelas y colegios de Costa Rica",
        tech: "Tecnologías: TypeScript, Deno, React, React Native",
        imgUrl: "assets/virtualLearningLogin.webp",
    }
]

const projectsContainer = document.querySelector(".proyectos-grid");
console.log(projectsContainer.ape)
for (const proyecto of PROYECTOS) {
    projectsContainer.innerHTML += `
        <article class="proyecto-card">
            <img src="${proyecto.imgUrl}" alt="TP1 - Título del Proyecto" class="project-image">
            <div class="project-details">
                <h3 class="project-title">${proyecto.nombre}</h3>
                <p class="project-description">${proyecto.descripcion}</p>
                <p class="project-tech">${proyecto.tech}</p>
                ${
                    proyecto.link ? `<a href="${proyecto.link}" target="_blank" class="project-link">Ver Repositorio</a>` : ""
                }
            </div>
        </article>
    `
}