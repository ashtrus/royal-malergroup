import React from 'react'
import Container from 'react-bootstrap/lib/container'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Image from 'react-bootstrap/lib/Image'

const OurMaterials = () => (
  <Container className="pb-5">
    <h2 className="pt-4 pb-5 text-uppercase text-center">We work with</h2>

    <Row>
      <Col xs={4} md={2}>
        <Image src="https://placeimg.com/320/240/arch" />
      </Col>
      <Col xs={4} md={2}>
        <Image src="https://placeimg.com/320/240/arch" />
      </Col>
      <Col xs={4} md={2}>
        <Image src="https://placeimg.com/320/240/arch" />
      </Col>
      <Col xs={4} md={2}>
        <Image src="https://placeimg.com/320/240/arch" />
      </Col>
      <Col xs={4} md={2}>
        <Image src="https://placeimg.com/320/240/arch" />
      </Col>
      <Col xs={4} md={2}>
        <Image src="https://placeimg.com/320/240/arch" />
      </Col>
    </Row>
  </Container>
)

export default OurMaterials
