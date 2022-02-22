import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  const linkedin = 'https://www.linkedin.com/in/marina-cousseiro-de-lima-a839b4149/';
  return (
    <footer className="text-center text-lg-start bg-primary footer">
      <section className="d-flex justify-content-center p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with Marina:</span>
        </div>
        <div>
          <a href={linkedin} className="me-4 text-reset">
            <FontAwesomeIcon icon={faLinkedin} className="icone-awesome" />
          </a>
          <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faInstagram} className="icone-awesome" />
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faFacebook} className="icone-awesome" />
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </section>
      <div className="text-center p-4 copyrighty">
        © 2022
        <a className="text-reset fw-bold" href="https://github.com/limatainer"> limatainer</a>
      </div>

    </footer>
  )
};

export default Footer;