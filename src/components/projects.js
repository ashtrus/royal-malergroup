import React from 'react'
import Container from 'react-bootstrap/lib/container'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Image from 'react-bootstrap/lib/Image'

const ProjectList = () => (
  <Container fluid>
    <h2 className="pt-4 pb-5 text-uppercase text-center">Recent Projects</h2>

    <Row className="py-4">
      <Col md={{ span: 6, offset: 3 }}>
        <p className="text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
          nihil illum suscipit porro? Laudantium architecto cum quos rerum
          repudiandae blanditiis reprehenderit explicabo. Quas nihil eum tempore
          consectetur culpa voluptatibus doloremque!
        </p>
      </Col>
    </Row>

    <Row noGutters>
      <Col xs={4} md={3}>
        <Image src="https://placeimg.com/640/480/arch" />
      </Col>
      <Col xs={4} md={3}>
        <Image src="https://placeimg.com/640/480/arch" />
      </Col>
      <Col xs={4} md={3}>
        <Image src="https://placeimg.com/640/480/arch" />
      </Col>
      <Col xs={4} md={3}>
        <Image src="https://placeimg.com/640/480/arch" />
      </Col>
    </Row>
  </Container>
)

export default ProjectList
