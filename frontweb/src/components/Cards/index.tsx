import needle from '../../assets/img/needling.jpg'
import redball from '../../assets/img/redball.jpg'
import pilatos from '../../assets/img/pilatos.jpg'
import massage from '../../assets/img/massage.jpg'
import './styles.css';
export default function Cards() {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="col">
          <div className="card bloby">
            <img src={needle} className="card-img-top" alt="needle" />
            <div className="card-body">
              <h5 className="card-title">Dry Needling</h5>
              <p className="card-text">This treatment emphasizes prevention and healing of injuries to the muscles and tendons and can be beneficial for people with injuries, chronic pain or restricted range of motion</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bloby">
            <img src={massage} className="card-img-top" alt="needle" />
            <div className="card-body">
              <h5 className="card-title">Sports Massage</h5>
              <p className="card-text">This is a neurophysiological evidence-based treatment technique that requires effective manual assessment of the neuromuscular system</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bloby">
            <img src={redball} className="card-img-top" alt="needle" />
            <div className="card-body">
              <h5 className="card-title">Injury Rehab</h5>
              <p className="card-text">Rehabilitation involves an individualised sport-specific related assessment and treatment approach with the goal of returning the athlete to competition and prevent further injury over time</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bloby">
            <img src={pilatos} className="card-img-top" alt="needle" />
            <div className="card-body">
              <h5 className="card-title">Pilates</h5>
              <p className="card-text">Recover your body get in shape and make it stronger</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
