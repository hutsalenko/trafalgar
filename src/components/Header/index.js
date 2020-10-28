import React from "react";
import "./index.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__menu">
        <div className="header__menu--logo">
          <div className="header__menu--logo-photo">t</div>
          <div className="header__menu--logo-title">Trafalgar</div>
        </div>
        <nav className="header__menu--nav">
          <a href="#">Home</a>
          <a href="#">Find a doctor</a>
          <a href="#">Apps</a>
          <a href="#">Testimonials</a>
          <a href="#">About us</a>
        </nav>
      </div>
      <div className="header__container">
        <div className="header__container--text">
          <div className="header__container--text-title">Virtual healthcare for you</div>
          <div className="header__container--text-subtitle">
            Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for
            everyone
          </div>
          <form>
            <button type="button" className="header__container--text-btn">
              Consult today
            </button>
          </form>
        </div>
        <img src="./img/header-img.png" alt="header-img" className="header__container--img" />
      </div>
      <div className="header__wraper">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </header>
  );
};

export default Header;
