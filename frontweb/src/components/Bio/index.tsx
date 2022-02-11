import nina from '../../assets/img/nina.jpeg'
import './styles.css'
export default function Bios() {
  return (
    <div className="container bio-container">
      <div className="marina-left">
        <h1>Your Physioterapist</h1>
        <p>Marina Cousseiro</p>
        <img src={nina} alt="marina" />
        <p>Brazilia with many specializations</p>
      </div>
      <div className="bio-detail">
        <h1>The best one in the field</h1>
        <p>With more the 10 years working proffesionally
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sed consequatur exercitationem fuga minus quasi natus aut provident earum nemo?
        </p>

      </div>
    </div>
  )
}
