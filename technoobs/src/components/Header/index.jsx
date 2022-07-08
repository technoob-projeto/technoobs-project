import React from "react";
import { HeaderStyle } from "./styles";
import logo from "../../assets/logo.png";
import menuicon from "../../assets/menuicon.png";


const Header = () => {
  return (
    <>
      <HeaderStyle>
        <li>
          <img className="img__menu" src={menuicon} />
        </li>
        <li>
          <img className="img__logo" src={logo} />
        </li>
        <li>
          <button>Home</button>
          <button>Developers</button>
          <button>Login</button>
        </li>
      </HeaderStyle>
    </>
  );
};

export default Header;
