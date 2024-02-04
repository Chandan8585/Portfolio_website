// import { projectsData } from "./Data/projectsData";
import { v4 as uuid } from 'https://cdn.skypack.dev/uuid';

export const projectsData = [
    {
        id: uuid(),
        name:"Nomad's Nest Hotel Booking App",
        category: "MERN",
        image: "https://github.com/Chandan8585/nomad_nest_frontend/raw/development/src/assets/Homepage.png",
        stacks: ["React", "MongoDB", "Express", "Nodejs"],
        description: "A hotel Booking app",
        github:"https://github.com/Chandan8585/nomad_nest_frontend.git",
        live:"https://nomad-nest-frontend-git-development-chandan8585.vercel.app/"
    },
    {
        id: uuid(),
        name:"TOMATINO",
        category: "REACT",
        image: "./assets/projects/movieApp.png",
        stacks: ["React", "Redux", "SASS"],
        description: "A movie app",
        github:"https://github.com/Chandan8585/Tomato.git",
        live:"https://tomato-seven.vercel.app/"
    },
    {
        id: uuid(),
        name:"Quizzify",
        category: "MERN",
        image: "",
        stacks: ["React", "MongoDB", "Express", "Nodejs"],
        description: "A quiz app",
        github:"",
        live:""
    },
    {
        id: uuid(),
        name:"Browser Extension",
        category: "REACT",
        image: "",
        stacks: ["React", "Css"],
        description: "A hotel Booking app",
        github:"",
        live:""
    },
    
    {
        id: uuid(),
        name:"To Do List",
        category: "JAVASCRIPT",
        image: "",
        stacks: ["React", "Redux", "SASS"],
        description: "A movie app",
        github:"",
        live:""
    },
]

const projectContainer = document.querySelector(".project_container");

projectsData.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("project-card");
    card.innerHTML = `
        <img src="${item.image}" alt="${item.name} Image">
        <div class="project-details">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>Stacks: ${item.stacks.join(", ")}</p>
            <div class="links">
                <a href="${item.github}" target="_blank">GitHub</a>
                <a href="${item.live}" target="_blank">Live Demo</a>
            </div>
        </div>
    </div>`;
    projectContainer.appendChild(card);
});
