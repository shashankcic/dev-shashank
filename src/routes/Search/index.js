import React, { useState } from 'react';
import ProjectCard from '../../components/ProjectCard';
import Scroll from '../../components/Scroll';
import { withRouter } from 'react-router-dom';
import initialProjects from '../../data/initialProjects';
import './styles.css';

function Search (props) {
	const [searchFieldLocal, setSearchFieldLocal] = useState(props.location.searchField ? props.location.searchField : "");

	const filteredProjects = initialProjects.length ? initialProjects.filter(
    project => {
      return (
        project
        .title
        .toLowerCase()
        .includes(searchFieldLocal.toLowerCase()) ||
        project
        .desc
        .toLowerCase()
        .includes(searchFieldLocal.toLowerCase())
      );
    }
  ) : null;

  function searchList(filteredProjects) {
    return (
      <ul className="projects-cards" style={{listStyleType: "none"}}>
        {
          filteredProjects.length ? filteredProjects.map(project =>  (
            <ProjectCard  key={project.id} project={project} />)
          ) : <h1>No Projects Found!</h1>
        }
      </ul>
    );
  }

  const handleInputChange = e => {
  	setSearchFieldLocal(e.target.value);
  }
	return(
		<section className="projects">
      <div>
        <h1 className="tracking-in-expand-fwd">Search Projects</h1>
      </div>
      <div className="pa2 search-bar" >
        <input 
          className="pa3 tc bb br3 grow b--none bg-lightest-blue"
          type = "search" 
          placeholder = "Search Projects" 
          value={searchFieldLocal}
          onChange = {handleInputChange}
          style={{width: "100%"}}
        />
      </div>
      <div >
        <Scroll >
          {searchList(filteredProjects)}
        </Scroll>
      </div>
    </section>
	);
}

export default withRouter(Search);