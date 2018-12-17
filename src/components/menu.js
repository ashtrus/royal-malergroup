import React from 'react'
import Container from 'react-bootstrap/lib/Container'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'

const Menu = ({ siteTitle }) => (
  <Container>
    <Navbar collapseOnSelect expand="lg" className="text-uppercase py-4">
      <Navbar.Brand
        href="/"
        style={{ fontSize: '1.6em', fontWeight: 'bold', color: 'royalblue' }}
      >
        {siteTitle}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          className="ml-auto"
          style={{ fontSize: '0.8em', color: '#331a78' }}
        >
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/services">Services</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Container>
)

export default Menu
