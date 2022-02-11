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
            <p className="cardtitle">Review</p>
            <div>
              <img src="https://i.pravatar.cc/200" alt="nivel5" className="cardimg" />
            </div>
            <div>
              <p className="carddescription">Poner en práctica los conocimientos adquiridos.</p>
            </div>
          </div>
        </label>
        <label className="item" htmlFor="t-2">
          <div className="mycard">
            <p className="cardtitle">Review</p>
            <div>
              <img src="https://i.pravatar.cc/200" alt="nivel5" className="cardimg" />
            </div>
            <div>
              <p className="carddescription">Poner en práctica los conocimientos adquiridos.</p>
            </div>
          </div>
        </label>
        <label className="item" htmlFor="t-3">
          <div className="mycard">
            <p className="cardtitle">Review</p>
            <div>
              <img src="https://i.pravatar.cc/200" alt="nivel5" className="cardimg" />
            </div>
            <div>
              <p className="carddescription">Poner en práctica los conocimientos adquiridos.</p>
            </div>
          </div>
        </label>
        <label className="item" htmlFor="t-4">
          <div className="mycard">
            <p className="cardtitle">Review</p>
            <div>
              <img src="https://i.pravatar.cc/200" alt="nivel5" className="cardimg" />
            </div>
            <div>
              <p className="carddescription">Poner en práctica los conocimientos adquiridos.</p>
            </div>
          </div>
        </label>
        <label className="item" htmlFor="t-5">
          <div className="mycard">
            <p className="cardtitle">Review</p>
            <div>
              <img src="https://i.pravatar.cc/200" alt="nivel5" className="cardimg" />
            </div>
            <div>
              <p className="carddescription">Poner en práctica los conocimientos adquiridos.</p>
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
