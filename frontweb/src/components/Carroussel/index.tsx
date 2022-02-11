import needle from '../../assets/img/needling.jpg'
import redball from '../../assets/img/redball.jpg'
import pilatos from '../../assets/img/pilatos.jpg'

import Carousel from 'react-bootstrap/Carousel';

import './styles.css'

export default function Carroussel() {
  return (
    <div className="container corpo">
      <br />
      <h1>Get in touch now</h1>
      <br />
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pilatos}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={redball}
            alt="Second slide"
          />

          <Carousel.Caption >
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={needle}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
