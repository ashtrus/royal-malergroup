import React from 'react'
import Container from 'react-bootstrap/lib/container'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Card from 'react-bootstrap/lib/card'
import CardGroup from 'react-bootstrap/lib/CardGroup'
import MainHeader from './main-header'

const Services = () => (
  <>
    <Container className="my-5">
      <MainHeader title={'Our services'} />

      <Row className="pb-4">
        <Col md={{ span: 8, offset: 2 }}>
          <p className="text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            nihil illum suscipit porro? Laudantium architecto cum quos rerum
            repudiandae blanditiis reprehenderit explicabo. Quas nihil eum
            tempore consectetur culpa voluptatibus doloremque!
          </p>
        </Col>
      </Row>

      <Row>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="https://placeimg.com/320/240/arch" />
            <Card.Body>
              <Card.Title className="mb-3 text-center text-uppercase">
                Service 1
              </Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{' '}
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src="https://placeimg.com/320/240/arch" />
            <Card.Body>
              <Card.Title className="mb-3 text-center text-uppercase">
                Service 2
              </Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{' '}
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src="https://placeimg.com/320/240/arch" />
            <Card.Body>
              <Card.Title className="mb-3 text-center text-uppercase">
                Service 3
              </Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{' '}
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Row>
    </Container>
  </>
)

export default Services
