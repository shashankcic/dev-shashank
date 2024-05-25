import initialProjects from '../../data/initialProjects';

const Projects = {};

if (initialProjects.length) {
  for (let i in initialProjects) {
    try {
      Projects[initialProjects[i].name] = require(`./${initialProjects[i].name}`).default;
    }
    catch (e) {

    }
  }
}

export default Projects;