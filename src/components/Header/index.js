import React, { useState } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { Navbar, Container, Nav, Form, Row, Col, FormControl, Button } from 'react-bootstrap';

function Header() {
  const [searchField, setSearchField] = useState("");
  const { pathname } = useLocation();

  const handleInputChange = ({ target: { value } }) => {
    setSearchField(value);
  }

  const handleSearchClick = () => {
    setSearchField("");
  }

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    handleSearchClick();
  };

  return (
    <div className="nav-header header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="m-auto" as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link className="m-auto" as={NavLink} to="/about">About Me</Nav.Link>
              <Nav.Link className="m-auto" as={NavLink} to="/blog">Blog</Nav.Link>
              <Nav.Link className="m-auto" as={NavLink} to="/projects">Projects</Nav.Link>
              <Nav.Link className="m-auto" as={NavLink} to="https://devshashank.com" target="_blank" rel="noopener noreferrer">Portfolio</Nav.Link>
            </Nav>
            {pathname !== "/search" && (
              <Form className='d-flex' onSubmit={handleFormSubmit}>
                <Row>
                  <Col xs={10} sm={8} md={6} lg={12} className="m-auto">
                    <Row>
                      <Col xs={9} lg={8}>
                        <FormControl type="text" placeholder="Search" value={searchField} onChange={handleInputChange} className="mr-sm-2" />
                      </Col>
                      <Col xs={3} lg={4}>
                        <Link to="/search" state={searchField} onClick={handleSearchClick}>
                          <Button variant="outline-success" type="submit" >Search</Button>
                        </Link>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;