import React from 'react'
import Container from 'react-bootstrap/lib/container'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Image from 'react-bootstrap/lib/Image'
import Media from 'react-bootstrap/lib/Media'

const AboutUs = () => (
  <Container>
    <h2 className="pt-4 pb-5 text-uppercase text-center">About Us</h2>

    <Row className="py-4">
      <Col md={{ span: 8, offset: 2 }}>
        <p className="text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
          nihil illum suscipit porro? Laudantium architecto cum quos rerum
          repudiandae blanditiis reprehenderit explicabo. Quas nihil eum tempore
          consectetur culpa voluptatibus doloremque!
        </p>
      </Col>
    </Row>

    <Row>
      <Col className="d-flex align-self-center justify-content-center">
        <Image src="https://placeimg.com/420/420/people" roundedCircle />
      </Col>
      <Col>
        <Media>
          <Image
            className="align-self-center mr-3"
            src="https://placeimg.com/96/96/people/grayscale"
            alt="Generic placeholder"
            roundedCircle
          />
          <Media.Body>
            <h3 className="text-uppercase mb-3">Media Heading</h3>
            <p className="mb-5">
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo.
            </p>
          </Media.Body>
        </Media>

        <Media>
          <Image
            className="align-self-center mr-3"
            src="https://placeimg.com/96/96/people/grayscale"
            alt="Generic placeholder"
            roundedCircle
          />
          <Media.Body>
            <h3 className="text-uppercase mb-3">Media Heading</h3>
            <p className="mb-5">
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo.
            </p>
          </Media.Body>
        </Media>

        <Media>
          <Image
            className="align-self-center mr-3"
            src="https://placeimg.com/96/96/people/grayscale"
            alt="Generic placeholder"
            roundedCircle
          />
          <Media.Body>
            <h3 className="text-uppercase mb-3">Media Heading</h3>
            <p className="mb-5">
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo.
            </p>
          </Media.Body>
        </Media>
      </Col>
    </Row>
  </Container>
)

export default AboutUs
