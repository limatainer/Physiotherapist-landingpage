import nina from '../../assets/img/nina.jpeg'
import './styles.css'
export default function Bios() {
  return (
    <>
      <div className="container bio-container">
        <div className="container marina-left">
          <h1>Your Physioterapist</h1>
          <p>Marina Cousseiro</p>
          <img src={nina} alt="marina" />
          <p>Brazil & Ireland</p>
        </div>
        <div className="container bio-detail">
          <h1>The best one in the field</h1>
          <br />
          <p>The PT Professional Marina Cousseiro is graduated in physiotherapy for 8 years
            and post-graduated in Trauma and Sports Orthopedics for 6 years.
            Her main experience for her career was the event of the Rio 2016 Olympic and ParaOlympic Games,
            expanding her vision and experience as a Sports Physiotherapist at the sports venue and during the games, giving assistance to the athletes on the field or court,also with the
            trainings and inside the service center for the athletes.
          </p>
        </div>
      </div>
    </>
  )
}
