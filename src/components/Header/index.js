import React, { useState }  from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './styles.css';

import {
  Navbar,
  Nav,
  Container,
  Form,
  Row,
  Col,
  Button,
  FormControl
} from 'react-bootstrap';
// import initialProjects from '../data/initialProjects';

function Header(props) {
  const [searchField, setSearchField] = useState("");
  const location = useLocation();

  // const filteredProjects = initialProjects.filter(
  //   project => {
  //     return (
  //       project
  //       .title
  //       .toLowerCase()
  //       .includes(searchField.toLowerCase()) ||
  //       project
  //       .desc
  //       .toLowerCase()
  //       .includes(searchField.toLowerCase())
  //     );
  //   }
  // );

  const handleInputChange = e => {
    setSearchField(e.target.value);
  }

  const handleSearchClick = e => {
    setSearchField("");
  }

  // const [menuOpen, toggleMenuOpen] = React.useState(false);
  return(
    <div className="nav-header header">
      <Navbar bg="dark" collapseOnSelect variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/">
            <img
              alt=""
              src={process.env.PUBLIC_URL + "/images/logoNav.png"}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Shashank
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="m-auto" as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link className="m-auto" as={NavLink} to="/about">About Me</Nav.Link>
              <Nav.Link className="m-auto" as={NavLink} to="/blog">Blog</Nav.Link>
              <Nav.Link className="m-auto" as={NavLink} to="/projects">Projects</Nav.Link>
              <Nav.Link className="m-auto" as={NavLink} to="https://singhshashank.com" target="_blank" rel="noopener noreferrer">Portfolio</Nav.Link>
              {/*<NavDropdown 
                as={Link} to="/projects"
                onMouseEnter={() => toggleMenuOpen(true) }
                onMouseLeave={() => toggleMenuOpen(false) }
                onToggle={() => { window.location.href = '/projects'}}
                show={menuOpen} title="Projects" id="collasible-nav-dropdown"
                >

                <NavDropdown.Item as={Link} to="/project1">Project 1</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#action/3.2">Project 2</NavDropdown.Item>
              </NavDropdown>*/}
            </Nav>
            { (location.pathname!=="/search") ? (<Form className='d-flex'>
                <Row>
                  <Col xs={10} sm={8} md={6} lg={12} className="m-auto">
                    <Row>
                      <Col xs={9} lg={8}>
                        <FormControl type="text" placeholder="Search" value={searchField} onChange={handleInputChange} className="mr-sm-2" />
                      </Col>
                      <Col xs={3} lg={4} >
                        <Link to="/search" state={searchField} onClick={handleSearchClick}>
                          <Button variant="outline-success" >Search</Button>
                        </Link>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>) : null
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;