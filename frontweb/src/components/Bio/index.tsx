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
        <p>With more the 10 years working proffesionally.
          Experienced Physiotherapist, Dry Needling, Cupping, Fascial Manipulation,
          Articular Manipulation, Rehabilitation, Sports Injuries & Sports / Deep Tissue Massage
          Graduated in physiotherapy for 8 years <br />
          and a 6-year postgraduate degree in Trauma and orthopedics in sports. He worked as a Physiotherapist and with sports massage at the 2016 Olympic and ParaOlympic Games. Specialized in the traditional Pilates method, floor and accessories for 7 years, and also in techniques such as fascial manipulation, dryneedling, joint manipulation with emphasis on the spine, Mulligan, <br />
          in addition to experiences clinics in other approaches
        </p>
      </div>
    </div>
  )
}
