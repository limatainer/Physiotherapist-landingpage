import Bios from 'components/Bio';
import Cards from 'components/Cards';
import { Button, Card } from 'react-bootstrap';

import './styles.css';

export default function Home() {
  return (
    <div className='container home-container'>
      <h1>Home</h1>
      <br />
      <button type="button" className='btn btn-primary whats'>
        <a href="https://api.whatsapp.com/send?phone=3530899407383&text=Texto%20aqui"
          target="_blank"> Whatsapp</a>
      </button>
      <Bios />
      <br />
      <Cards />
      <br />
      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  )
}