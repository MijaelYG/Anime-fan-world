import { useState } from "react";
import Iconninja from "../static/Iconninja";
import Logo from "../assets/img/logoAFW.png"
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  const [arrayABC] = useState(["A","B","C","D","E","F","G",
    "H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]);
  return (
<div className="header-main">
      <div className="logo-anime">
        <img src={Logo} alt="" />
      </div>
      <div className="abc-nav">
        <div className="search-abc">
          <ul>
            {arrayABC.map((letter,index) => <li key={index}>{letter}</li>)}
          </ul>
        </div>
      </div>
      <div className="search-nav">
        <input type="text" />
        <div className="search-logo"></div>
      </div>
      <Link className="login" to={""}>
          <div className="login-logo"><Iconninja /></div>
          <div className="textlogin">LOGIN</div> 
      </Link>
    </div>
  )
}

export default Header

