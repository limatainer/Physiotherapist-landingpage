import Button from 'components/Button';
import MiniCards from 'components/Cards/MiniCards'
import { ReactComponent as PersonalTrainer } from '../../assets/img/undraw_personal_trainer_ote3.svg';
import './styles.css';
export default function Services() {
  return (
    <>
      <MiniCards />
      <br />
      <div className="content">
        <div className="hero-contents">
          <h1 className="hero-title">
            Professionalism,<br /> experience and responsability<br />
            trusted by the bests
          </h1>
          <Button />
        </div>
        <PersonalTrainer />
        <br />
      </div>
      <section className="container plans-container">
        <h3>
          Please choose a plan and lets get in touch to make that body back on track again shall we?
        </h3>
        <p>
          Interested? Why not give a long term try? <br /> Here are my plans specially created for you
        </p>
        <div className="container plans-cards-container">
          <div className="plans-card">
            <h4 className="card-title">
              One time
            </h4>
            <div className="price">
              <div className="value">
                <span>€</span>
                <p>28</p>
              </div>
            </div>
            <p className="text">
              For a single treatment one time
            </p>
            <Button />
          </div>
          <div className="plans-card favorite">
            <h4 className="card-title">
              Monthly
            </h4>
            <div className="button button-favorite">Prefered</div>
            <div className="price">
              <div className="value">
                <span>€</span>
                <p>57*</p>
              </div>
            </div>
            <p className="text">
              *Once a Week or <br />
              You can make it twice a week for more 10€
            </p>
            <Button />
          </div>

          <div className="container plans-card">
            <h4 className="card-title">
              Evaluation
            </h4>
            <div className="price">
              <div className="value">
                <span>€</span>
                <p>94</p>
              </div>
            </div>
            <p className="text">
              Based on Marina's evaluation a treatment can be arranged for you
            </p>
            <Button />
          </div>
        </div>
      </section>
      <br />
    </>
  )
}
