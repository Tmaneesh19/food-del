import React from 'react';
import './Header.css';
import { assets } from '../../assets/assets';

const Header = () => {
  return (
    <div className="header">
      <div className="heading-container">
    <img src={assets.foof} alt="Icon" className="heading-icon" />
    <h2 className="text">Discover Your New Favorite Dishes Today</h2>
    <img src={assets.foof} alt="Icon" className="heading-icon" />
</div>

      <div className="carousel-container" style={{ width: "80%", margin: "0 auto" }}>
  <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="1200">
        <img src={assets.cf} className="d-block w-100" alt="Dish 1" />
      </div>
      <div className="carousel-item" data-bs-interval="1200">
        <img src={assets.ct} className="d-block w-100" alt="Dish 2" />
      </div>
      <div className="carousel-item" data-bs-interval="1200">
        <img src={assets.cs} className="d-block w-100" alt="Dish 3" />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>

    </div>
  );
};

export default Header;
