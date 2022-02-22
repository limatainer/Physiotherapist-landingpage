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
            <p>Get strength Get in shape Reduce your pain and gain healthy muscles too</p>
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
            <p>The main focus is to optimise patient function and well-being</p>
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
            <p>With needling we can treat muscle tissue get read of the pain so we can inactivate trigger points and restore you motor functions</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}
