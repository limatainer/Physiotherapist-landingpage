import Carroussel from 'components/Carroussel';
import './styles.css'
export default function Speciality() {
  return (
    <div className='container'>
      <Carroussel />
      <br />
      <div className="container-form">
        <h1>Start your assessment and get quote</h1>
        <iframe
          src='https://docs.google.com/forms/d/e/1FAIpQLScQnnOOlj-LjHKdSUndYuTXzwMX0Su3jRytN6HkZ-hV7Ch67A/viewform?vc=0&c=0&w=1&flr=0'
        >Loading...</iframe>
        <br />
        <p>By filling out this form you agree to have Marina to contact you back</p>
      </div>

    </div>
  )
}
