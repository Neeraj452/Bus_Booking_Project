import React from 'react'
import img1 from '../image/travelimg1.jpg'
import img2 from '../image/travelimg2.jpg'
import img3 from '../image/travelimg3.jpg'
function Header() {
      return (
            <>
           <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
  
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="..." width="100%" height="600px"/>
      <div class="carousel-caption  d-md-block">
      <h5>WELCOME TO GREENBUS</h5>
        <div className="slider-btn">
          <form >
            {/* <input type="text" placeholder="Initial Place" name="initial" className="inline" /> */}
            <select name="cars" id="cars">
  <option value="volvo">Initial Place</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
            <h6 className="inline">To</h6>
            {/* <input type="text" placeholder="Destination Place" name="initial"/> */}
            <select name="cars" id="cars">
  <option value="volvo">Destination</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
            <input type="date" placeholder="Destination Place" name="initial"/>
            <button className="btn-2">Search</button>
        
        </form>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img2}class="d-block w-100" alt="..."width="100%" height="600px"/>
      <div class="carousel-caption  d-md-block">
      <h5>WELCOME TO GREENBUS</h5>
       
        <div className="slider-btn">
        <form >
            {/* <input type="text" placeholder="Initial Place" name="initial" className="inline" /> */}
            <select name="cars" id="cars">
  <option value="volvo">Initial Place</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
            <h6 className="inline">To</h6>
            {/* <input type="text" placeholder="Destination Place" name="initial"/> */}
            <select name="cars" id="cars">
  <option value="volvo">Destination</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
            <input type="date" placeholder="Destination Place" name="initial"/>
            <button className="btn-2">Search</button>
        
        </form>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img3}class="d-block w-100" alt="..." width="100%" height="600px"/>
      <div class="carousel-caption  d-md-block">
        <h5>WELCOME TO GREENBUS</h5>
      
        <div className="slider-btn">
        <form >
            {/* <input type="text" placeholder="Initial Place" name="initial" className="inline" /> */}
            <select name="cars" id="cars">
  <option value="volvo">Initial Place</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
            <h6 className="inline">To</h6>
            {/* <input type="text" placeholder="Destination Place" name="initial"/> */}
            <select name="cars" id="cars">
  <option value="volvo">Destination</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
            <input type="date" placeholder="Destination Place" name="initial"/>
            <button className="btn-2">Search</button>
        
        </form>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{/*    
               <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
      <img src={img1} class="d-block w-100" height="500px" alt="..."/>
      <div class="carousel-caption  d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
        <div className="slider-btn">
        <button className="btn btn-1">Our Service</button>
        <button className="btn btn-2">Our product</button>
        </div>
      </div>

    </div>
    <div class="carousel-item">
    <img src={img2} class="d-block w-100" height="500px" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
        <div className="slider-btn">
        <button className="btn btn-primary btn-1">Our Service</button>
        <button className="btn btn-primary btn-2">Our product</button>
        </div>
      </div>
    </div>
    <div class="carousel-item">
    <img src={img3} class="d-block w-100" height="500px" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
        <div className="slider-btn">
        <button className="btn btn-primary btn-1">Our Service</button>
        <button className="btn btn-primary btn-2">Our product</button>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> */}

            </>
      )
}

export default Header;
