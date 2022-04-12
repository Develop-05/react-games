import {useState, useRef} from "react";
import { Link } from "react-router-dom";
import { CartBlock } from "../CartBlock/CartBlock";
import {games} from '../../pages/HomePage/HomePage';
import { GameItem } from "../GameItem/GameItem";

import "./Header.css";


export const Header = () => {

  return (
  
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header__store-title">
        <h3>Game Store</h3>
        </Link>
      </div>

      <div className="wrapper header__cart-btn-wrapper">
        <CartBlock />
      </div>
    </div>
  
  );
};
