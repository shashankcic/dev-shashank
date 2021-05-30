import React  from 'react';
import { Link } from 'react-router-dom';

function Header() {
	
  return(
		<div className="bg-white black-80 tc pv4 avenir">
      <h1 className="mt2 mb0 baskerville i fw1 f1">Shashank</h1>
      <h2 className="mt2 mb0 f6 fw4 ttu tracked">My Projects</h2>
      <nav className="bt bb tc mw7 center mt4">
        <Link className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" to='/'>Home</Link>
        <Link className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" to="/about">About Me</Link>
        <Link className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" to="/blog">Blog</Link>
        <Link className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" to="/projects">Projects</Link>
        <Link className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" to={{ pathname: "https://singhshashank.co" }} target="_blank" title="Portfolio">Portfolio</Link>
      </nav>
    </div>
	);
}

export default Header;