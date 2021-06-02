import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import initialProjects from '../../data/initialProjects';
import './styles.css';

function Project() {
	const projects = initialProjects.length ? initialProjects.map(project => <ProjectCard key={project.id} project={project} /> ) : "No projects found!";
	return(
		<div className="projects">
			<h1 className="tracking-in-expand-fwd">
				Projects
			</h1>
			<ul className="projects-cards">
				{projects}
			</ul>
		</div>
	);
}

export default Project;