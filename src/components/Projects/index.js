import initialProjects from '../../data/initialProjects';

let Projects = {};

for(let i in initialProjects){
    Projects[initialProjects[i].name] = require(`./${initialProjects[i].name}`).default;
}

export default Projects;