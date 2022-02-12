import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  const linkedin = 'https://www.linkedin.com/in/marina-cousseiro-de-lima-a839b4149/';
  return (
    <footer className="text-center text-lg-start bg-primary footer">
      <section
        className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
      >
        <div className="me-5 d-none d-lg-block">
          <span>Get connected Marina on social networks:</span>
        </div>
        <div>
          <a href={linkedin} className="me-4 text-reset">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faInstagram} />
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faFacebook} />
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </section>
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Cousseiro
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Jobs
              </h6>
              <p>
                <a href="#!" className="text-reset">Olympics</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Past</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Reviews</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Carrear</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Learn from links
              </h6>
              <p>
                <a href="#!" className="text-reset">Article</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Videos</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Locations</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Treatments</a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Contact
              </h6>
              <p><i className="fas fa-home me-3"></i> Dublin, IE</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                ninacousseiro@gmail.com
              </p>
              <p><i className="fas fa-phone me-3"></i> + 351 89 940 7383</p>
            </div>
          </div>
        </div>
      </section>


      <div className="text-center p-4 copyrighty">
        © 2022
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/"> limatainer</a>
      </div>

    </footer>
  )
};

export default Footer;