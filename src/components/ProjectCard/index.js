import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function ProjectCard({project}) {
	return(
		<li className="projects-cards-items">
			<div className="project-card">
      	<img src={`${process.env.PUBLIC_URL}/images/projects-images/${project.imgPath}`} alt={project.imgName} className="project-card-image" />
	      <div className="project-card-content">
	        <div className="project-card-title">{project.title}</div>
	        <p className="project-card-text">{project.desc}</p>
	        <div className="project-card-buttons">
	        	<Link to={`/projects/${project.path}`}>
	        	<button className="project-card-button">Open Component</button>
	        </Link>
	        <Link to={{ pathname: `${project.githubLink}`}} target="_blank">
	        	<button className="project-card-button">See Source Code</button>
	        </Link>
	        </div>
	      </div>
	    </div>
    </li>
	);
}

export default ProjectCard;