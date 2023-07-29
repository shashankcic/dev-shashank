import React, { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import Scroll from "../../components/Scroll";
import withRouter from "../../functions/WithRouter";
import initialProjects from "../../data/initialProjects";
import "./styles.css";
import { useLocation } from "react-router-dom";

function Search({ searchField }) {
  const [searchFieldLocal, setSearchFieldLocal] = useState(
    searchField ? searchField : ""
  );
  const { state } = useLocation();
  const [searchShow, setSearchShow] = useState(searchFieldLocal ? true : false);

  const filteredProjectsList = initialProjects.length
    ? initialProjects.filter((project) => {
        return (
          project.title
            .toLowerCase()
            .includes(searchFieldLocal.toLowerCase()) ||
          project.desc.toLowerCase().includes(searchFieldLocal.toLowerCase())
        );
      })
    : null;

  useEffect(() => {
    setSearchFieldLocal(state ? state : "");
    setSearchShow(state ? true : false);
  }, [state]);

  function searchList(filteredProjects) {
    return (
      <ul
        className={`${filteredProjects.length ? "projects-cards" : ""}`}
        style={{ listStyleType: "none", padding: "1rem" }}
      >
        {filteredProjects.length ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <h1 style={{ padding: "4rem" }}>No Projects Found!</h1>
        )}
      </ul>
    );
  }

  const handleInputChange = (e) => {
    setSearchFieldLocal(e.target.value);
    if (e.target.value === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  return (
    <section className="projects">
      <div>
        <h1 className="tracking-in-expand-fwd">Search Projects</h1>
      </div>
      <div className="pa2 search-bar">
        <input
          className="pa3 tc bb br3 grow b--none bg-lightest-blue"
          type="search"
          placeholder="Search Projects"
          value={searchFieldLocal}
          onChange={handleInputChange}
          style={{ width: "100%" }}
        />
      </div>
      <div>
        <Scroll>{searchShow ? searchList(filteredProjectsList) : null}</Scroll>
      </div>
    </section>
  );
}

export default withRouter(Search);
