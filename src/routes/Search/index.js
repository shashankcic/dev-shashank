import React, { useEffect, useState, useMemo } from "react";
import ProjectCard from "../../components/ProjectCard";
import Scroll from "../../components/Scroll";
import withRouter from "../../functions/WithRouter";
import initialProjects from "../../data/initialProjects";
import "./styles.css";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

Search.propTypes = {
  searchField: PropTypes.string,
};

function Search({ searchField }) {
  const [searchFieldLocal, setSearchFieldLocal] = useState(searchField ?? "");
  const { state } = useLocation();
  const [searchShow, setSearchShow] = useState(!!searchFieldLocal);

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) =>
      project.title.toLowerCase().includes(searchFieldLocal.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchFieldLocal.toLowerCase())
    );
  }, [searchFieldLocal]);

  useEffect(() => {
    setSearchFieldLocal(state || "");
    setSearchShow(!!state);
  }, [state]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchFieldLocal(value);
    setSearchShow(!!value);
  };

  return (
    <section className="projects">
      <h1 className="heading tracking-in-expand-fwd">Search Projects</h1>
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
      <Scroll>
        {searchShow && searchList(filteredProjects)}
      </Scroll>
    </section>
  );
}

function searchList(filteredProjects) {
  if (filteredProjects.length === 0) {
    return <h1 className="heading" style={{ padding: "4rem" }}>No Projects Found!</h1>;
  }

  return (
    <ul className="projects-cards" style={{ listStyleType: "none", padding: "1rem" }}>
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ul>
  );
}

export default withRouter(Search);