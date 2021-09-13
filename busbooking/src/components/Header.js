import React from 'react'
import img1 from '../image/travelimg1.jpg'
import img2 from '../image/travelimg2.jpg'
import img3 from '../image/travelimg3.jpg'
import ChoosePlace from '../components/ChoosePlace'
function Header() {

      return (
            <>
           <div id="carouselExampleCaptions" className="carousel" data-bs-ride="">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100" alt="..." width="100%" height="700px"/>
      <div className="carousel-caption  d-md-block">
      <h5>WELCOME TO GREENBUS</h5>
        <div className="slider-btn">

          <ChoosePlace />
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="..."width="100%" height="700px"/>
      <div className="carousel-caption  d-md-block">
      <h5>WELCOME TO GREENBUS</h5>
       
        <div className="slider-btn">

        <ChoosePlace />  
     
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="..." width="100%" height="700px"/>
      <div className="carousel-caption  d-md-block">
        <h5>WELCOME TO GREENBUS</h5>
      
        <div className="slider-btn">

        <ChoosePlace />
        
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



            </>
      )
}

export default Header;
