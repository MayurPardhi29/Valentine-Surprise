import '../style/RoseDay.css';
import React from 'react'

const RoseDay = () => {
  return (
    <div className="rose-day-bg">
      <div className="content-page">
        {/* <div className="rose-image-wrapper">
          <img src="/assets/Single-Rose.jpg" alt="Rose" className="main-rose-image" />
          <div className="rose-image-overlay">Rose Day - February 7</div>
        </div> */}
        <div className="rose-day-content">
          <h2 className="masking-text" style={{ backgroundImage: `url(${"/assets/Single-Rose.jpg"})` }}>
            A Rose for You <br /> <span>🌹</span>
          </h2>

          <div className="poem-container">
            <img src="/assets/Single-Rose.jpg" alt="Rose Image 1" className="poem-image left" />
            <div className="poem-text">
              <p>
                On this day of love so true, <br />
                I send a gentle rose to you. <br />
                A bloom so bright, a hue so deep, <br />
                With whispers soft, my heart does speak. <br />
              </p>
              <p>
                A red rose shines with passion bold, <br />
                A tale of love that's long been told. <br />
                Pink, for thanks, so sweet and kind, <br />
                A bond of trust, a heart aligned. <br />
              </p>
              <p>
                White, a wish for something new, <br />
                A journey fresh, a sky so blue. <br />
                And yellow beams like morning light, <br />
                A friendship pure, forever bright. <br />
              </p>
              <p>
                So take this rose, my gift to say, <br />
                You're cherished more than words convey. <br />
                May love and joy forever stay, <br />
                With you on this Rose Day! <br />
              </p>
            </div>
            <img src="/assets/Single-Rose.jpg" alt="Rose Image 2" className="poem-image right" />
          </div>
        </div>
      </div>
      <div className="falling-compliment">
        {Array.from({ length: 30 }).map((_, index) => (
          <span key={index} className="compliment">🌹</span>
        ))}
      </div>
    </div>
  )
}

export default RoseDay;
