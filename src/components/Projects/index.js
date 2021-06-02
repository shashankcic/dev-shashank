import initialProjects from '../../data/initialProjects';

let Projects = {};

if(initialProjects.length){
  for(let i in initialProjects){
    try{
      Projects[initialProjects[i].name] = require(`./${initialProjects[i].name}`).default;
    }
  }
}

export default Projects;