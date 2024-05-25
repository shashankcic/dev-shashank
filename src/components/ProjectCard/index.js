import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "./styles.css";

ProjectCard.propTypes = {
  project: PropTypes.shape({
    imgPath: PropTypes.string,
    imgName: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    path: PropTypes.string,
    githubLink: PropTypes.string,
  }).isRequired,
};

function ProjectCard({ project: { imgPath, imgName, title, desc, path, githubLink } }) {
  return (
    <li className="projects-cards-items">
      <div className="project-card">
        <img
          src={`${process.env.PUBLIC_URL}/images/projects-images/${imgPath}`}
          alt={imgName}
          className="project-card-image"
        />
        <div className="project-card-content">
          <div className="project-card-title">{title}</div>
          <p className="project-card-text">{desc}</p>
          <div className="project-card-buttons">
            <Link to={path}>
              <button className="project-card-button">Open Component</button>
            </Link>
            <Link to={githubLink} target="_blank" rel="noopener noreferrer">
              <button className="project-card-button">See Source Code</button>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProjectCard;