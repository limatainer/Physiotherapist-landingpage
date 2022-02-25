import nina from '../../assets/img/nina.jpeg'
import './styles.css'
export default function Bios() {
  return (
    <div className="container bio-container">
      <div className="marina-left">
        <h1>Your Physioterapist</h1>
        <p>Marina Cousseiro</p>
        <img src={nina} alt="marina" />
        <p>Brazil & Ireland</p>
      </div>
      <div className="bio-detail">
        <h1>The best one in the field</h1>
        <br />
        <p>The PT Professional Marina Cousseiro is graduated in physiotherapy for 8 years <br />
          and post-graduated in Trauma and Sports Orthopedics for 6 years. Her main experience for her career was the event of the Rio 2016 Olympic and ParaOlympic Games,<br />
          expanding her vision and experience as a Sports Physiotherapist at the sports venue and during the games, giving assistance to the athletes on the field or court,<br />also with the
          trainings and inside the service center for the athletes. , using as main tools some techniques such as Recovery Massage, Deep Tissue Liberation, Kinesiology Tape,<br />Electronic
          therapy machines, Mulligan, Fascial Mobilization in addition to other aspects to support the prevention and recovery of athletes.<br />
          The Physiotherapist Marina, is also specialized in the traditional Pilates method, floor and accessories for 7 years, and also in techniques such as fascial manipulation,
          <br />dryneedling, joint manipulation with emphasis on the spine, Mulligan, as well as clinical experiences in other approaches.
        </p>
      </div>
    </div>
  )
}
