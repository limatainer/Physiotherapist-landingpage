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
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bloby">
            <img src={massage} className="card-img-top" alt="needle" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bloby">
            <img src={redball} className="card-img-top" alt="needle" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bloby">
            <img src={pilatos} className="card-img-top" alt="needle" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
