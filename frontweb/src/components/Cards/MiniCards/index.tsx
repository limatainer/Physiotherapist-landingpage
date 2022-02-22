import React from 'react'
import './styles.css';
export default function MiniCards() {
  return (
    <div className="slider">
      <input type="radio" name="testimonial" id="t-1" />
      <input type="radio" name="testimonial" id="t-2" />
      <input type="radio" name="testimonial" id="t-3" checked />
      <input type="radio" name="testimonial" id="t-4" />
      <input type="radio" name="testimonial" id="t-5" />
      <div className="testimonials mb-8">
        <label className="item" htmlFor="t-1">
          <div className="mycard">
            <p className="cardtitle">Julio A.</p>
            <div>
              <img src="https://i.pravatar.cc/300?img=3" alt="nivel5" className="cardimg" />
            </div>
            <div>
              <p className="carddescription">Very professional. Recomended</p>
            </div>
          </div>
        </label>
        <label className="item" htmlFor="t-2">
          <div className="mycard">
            <p className="cardtitle">Marco P.</p>
            <div>
              <img src="https://i.pravatar.cc/300?img=8" alt="nivel5" className="cardimg" />
            </div>
            <div>
              <p className="carddescription">Whith Marina you are in good hands</p>
            </div>
          </div>
        </label>
        <label className="item" htmlFor="t-3">
          <div className="mycard">
            <p className="cardtitle">Thargelia</p>
            <div>
              <img src="https://i.pravatar.cc/300?img=1" alt="nivel5" className="cardimg" />
            </div>
            <div>
              <p className="carddescription">Marina can take very good care and is very professional</p>
            </div>
          </div>
        </label>
        <label className="item" htmlFor="t-4">
          <div className="mycard">
            <p className="cardtitle">Maria S.</p>
            <div>
              <img src="https://i.pravatar.cc/300?img5" alt="nivel5" className="cardimg" />
            </div>
            <div>
              <p className="carddescription">Adorei o trabalho muito aliviada</p>
            </div>
          </div>
        </label>
        <label className="item" htmlFor="t-5">
          <div className="mycard">
            <p className="cardtitle">Artyom V.</p>
            <div>
              <img src="https://i.pravatar.cc/300?img=4" alt="nivel5" className="cardimg" />
            </div>
            <div>
              <p className="carddescription">Marina has magic hands I can walk with no pain today thanks to her</p>
            </div>
          </div>
        </label>
      </div>
      <div className="dots">
        <label htmlFor="t-1"></label>
        <label htmlFor="t-2"></label>
        <label htmlFor="t-3"></label>
        <label htmlFor="t-4"></label>
        <label htmlFor="t-5"></label>
      </div>
    </div>
  )
}
