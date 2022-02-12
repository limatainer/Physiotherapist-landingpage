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
        <div className="container hero-contents">
          <h1 className="hero-title">
            Professionalism,<br /> experience and responsability<br />
            trusded by the bests
          </h1>
          <Button />
        </div>
        <PersonalTrainer />
        <br />
      </div>
      <section className="container plans-container">

        <h3 className="title">
          My Plans
        </h3>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia <br /> mi quis euismod ultrices.
        </p>
        <div className="plans-cards-container">
          <div className="plans-card">
            <h4 className="card-title">
              Silver
            </h4>
            <div className="price">
              <div className="value">
                <span>€</span>
                <p>28</p>
              </div>
              <p>/month</p>
            </div>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.
            </p>
            <button type="button" className='btn btn-primary whats'>
              <a href="https://api.whatsapp.com/send?phone=3530899407383&text=Texto%20aqui"
                target="_blank"> Sign</a>
            </button>
          </div>

          <div className="plans-card favorite">
            <h4 className="card-title">
              Metal
            </h4>
            <div className="button button-favorite">Preferido</div>
            <div className="price">
              <div className="value">
                <span>€</span>
                <p>57</p>
              </div>
              <p>/month</p>
            </div>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.
            </p>
            <button type="button" className='btn btn-primary whats'>
              <a href="https://api.whatsapp.com/send?phone=3530899407383&text=Texto%20aqui"
                target="_blank"> Sign</a>
            </button>
          </div>

          <div className="plans-card">
            <h4 className="card-title">
              Ouro
            </h4>
            <div className="price">
              <div className="value">
                <span>€</span>
                <p>94</p>
              </div>
              <p>/month</p>
            </div>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.
            </p>
            <button type="button" className='btn btn-primary whats'>
              <a href="https://api.whatsapp.com/send?phone=3530899407383&text=Texto%20aqui"
                target="_blank"> Sign</a>
            </button>
          </div>
        </div>
      </section>
      <br />
    </>
  )
}
