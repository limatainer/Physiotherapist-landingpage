import Button from 'components/Button';
import MiniCards from 'components/Cards/MiniCards'
import { ReactComponent as PersonalTrainer } from '../../assets/img/undraw_personal_trainer_ote3.svg';
import './styles.css';
export default function Services() {
  return (
    <div className='container'>
      <div className="container responsive-title">
        <br />
        <h1>Marina Cousseiro Phisio</h1>
        <p>Make a Move</p>
      </div>
      <MiniCards />
      <br />
      <div className="container content">
        <div className="hero-contents">
          <h1 className="hero-title">
            Professionalism,<br /> experience and responsability<br />
            trusted by the bests
          </h1>
          <br />
          <Button />
        </div>
        <PersonalTrainer className='personal-image' />
        <br />
      </div>
      <div className="container">
        <section className="plans-container">
          <h3>
            Please choose a plan and lets get in touch to make that body back on track again shall we?
          </h3>
          <p>
            Interested? Why not give a long term try? <br /> Here are my plans specially created for you
            <br /> First sessions with evaluation are have duration of 1hr <br /> other sessions have 45mins
          </p>
          <div className="plans-cards-container">
            <div className="plans-card">
              <h4 className="card-title">
                First Session + Evaluation
              </h4>
              <div className="price">
                <div className="value">
                  <span>€</span>
                  <p>50</p>
                </div>
              </div>
              <p className="text">
                For a single treatment and after first session all others are 45€
              </p>
              <Button />
            </div>
            <div className="plans-card favorite">
              <h4 className="card-title">
                Monthly
              </h4>
              <div className="button button-favorite">Prefered</div>
              <div className="price">
                <div className="value prefered">
                  <span>€</span>
                  <p>35*</p>
                </div>
              </div>
              <p className="text">
                *4 sessions <br />
                if more than a month has passed since the payment was made, the sessions will not be transferred to the following month,
                <br /> unless there is a delicate reason that has been notified up to 2 hours in advance.
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
                  <p>35</p>
                </div>
              </div>
              <p className="text">
                Onse single evaluation that based on Marina's evaluation a treatment can be arranged for you
                <br /> Duration is 35min
              </p>
              <Button />
            </div>
          </div>
        </section>
      </div>
      <br />
    </div>
  )
}
