import React, { useState }  from 'react';
import { NavLink, Link } from 'react-router-dom';

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

function Header() {
  const [searchField, setSearchField] = useState("");

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
    <div className="nav-header">
      <Navbar bg="dark" collapseOnSelect variant="dark" expand="lg">
        <Container fluid>  
          <Navbar.Brand as={NavLink} exact to="/">
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
              <Nav.Link as={NavLink} exact to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} exact to="/about">About Me</Nav.Link>
              <Nav.Link as={NavLink} exact to="/blog">Blog</Nav.Link>
              <Nav.Link as={NavLink} exact to="/projects">Projects</Nav.Link>
              <Nav.Link as={NavLink} exact to ={{pathname: "https://singhshashank.co"}} target="_blank" >Portfolio</Nav.Link>
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
            <Form inline>
              <Row>
                <Col>
                  <FormControl type="text" placeholder="Search" value={searchField} onChange={handleInputChange} className="mr-sm-2" />
                </Col>
                <Col>
                  <Link to={{ pathname:"/search", searchField }} onClick={handleSearchClick} >
                    <Button variant="outline-success" >Search</Button>
                  </Link>
                </Col>
              </Row>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;