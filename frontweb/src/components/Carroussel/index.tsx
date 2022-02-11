import needle from '../../assets/img/needling.jpg'
import redball from '../../assets/img/redball.jpg'
import pilatos from '../../assets/img/pilatos.jpg'

import Carousel from 'react-bootstrap/Carousel';

import './styles.css'

export default function Carroussel() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item className='carousel-item'>
          <img
            className="d-block w-100"
            src={pilatos}
            alt="First slide"
          />
          <Carousel.Caption className='carousel-caption'>
            <h3>Pilates</h3>
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
            <h3>Reabilitation</h3>
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
            <h3>dry needling</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}
