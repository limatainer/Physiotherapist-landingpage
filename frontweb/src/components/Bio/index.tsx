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
        <p>With more the 10 years working proffesionally
          Experienced Physiotherapist, Dry Needling, Cupping, Fascial Manipulation, Articular Manipulation, Rehabilitation, Sports Injuries & Sports / Deep Tissue Massage
        </p>

      </div>
    </div>
  )
}
