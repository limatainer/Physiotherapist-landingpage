import Bios from 'components/Bio';
import Cards from 'components/Cards';
import { Button, Card } from 'react-bootstrap';

import './styles.css';

export default function Home() {
  return (
    <div className='container home-container'>
      <h1>Welcome to Marina Cousseiro's portal</h1>
      <br />
      <Bios />
      <br />
      <Cards />
      <br />
      <Card className="text-center">
        <Card.Header>Have a treat and contact Marina now</Card.Header>
        <Card.Body>
          <Card.Title>Special personalized treatment</Card.Title>
          <Card.Text>
            Following all the right protocols of safety get your recovery with the hands of a professional with major experiences on the recovery field
          </Card.Text>
          <button type="button" className='btn btn-primary whats'>
            <a href="https://api.whatsapp.com/send?phone=3530899407383&text=Texto%20aqui"
              target="_blank"> Whatsapp</a>
          </button>
        </Card.Body>
        <Card.Footer className="text-muted">Covid safe protocol</Card.Footer>
      </Card>
    </div>
  )
}