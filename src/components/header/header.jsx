import React from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import {FiSearch} from 'react-icons/fi'
export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper container">
      <div className="header__left">
      <img src={logo} alt="logotip" className="logo"/>
        <form className="header__form">
          <input className="header__input" type="text" placeholder="user" />
          <button className="header__btn"><FiSearch className="icon"/></button>
        </form>
      </div>

        <div className="header__user">
          <p className="userName"> John Doe</p>
        </div>
      </div>
    </header>
  );
};
