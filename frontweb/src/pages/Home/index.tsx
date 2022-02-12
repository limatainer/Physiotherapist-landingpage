import Bios from 'components/Bio';
import Button from 'components/Button';
import Cards from 'components/Cards';
import { Card } from 'react-bootstrap';

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
          <Button />
        </Card.Body>
        <Card.Footer className="text-muted">Covid safe protocol</Card.Footer>
      </Card>
    </div>
  )
}