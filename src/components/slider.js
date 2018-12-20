import React from 'react'
import Carousel from 'react-bootstrap/lib/Carousel'

const Slider = () => (
  <Carousel fade indicators={false}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://placeimg.com/1600/700/arch"
        alt="First slide"
      />

      <Carousel.Caption className="mb-5">
        <h3 className="display-2">First slide label</h3>
        <h4>Nulla vitae elit libero, a pharetra augue mollis interdum.</h4>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://placeimg.com/1600/700/arch"
        alt="Second slide"
      />
      <Carousel.Caption className="mb-5">
        <h3 className="display-2">Second slide label</h3>
        <h4>Nulla vitae elit libero, a pharetra augue mollis interdum.</h4>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://placeimg.com/1600/700/arch"
        alt="Third slide"
      />
      <Carousel.Caption className="mb-5">
        <h3 className="display-2">Third slide label</h3>
        <h4>Nulla vitae elit libero, a pharetra augue mollis interdum.</h4>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)

export default Slider
