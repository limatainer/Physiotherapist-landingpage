import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';
export default function Button() {
  return (
    <button type="button" className='btn whats-btn'>
      <a href="https://api.whatsapp.com/send?phone=3530899407383&text=Texto%20aqui"
        target="_blank"> Whatsapp
        <FontAwesomeIcon icon={faWhatsapp} className="whats" />
      </a>
    </button>
  )
}
