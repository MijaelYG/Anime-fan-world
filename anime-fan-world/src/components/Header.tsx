import { useState } from "react";
import Iconninja from "../static/Iconninja";
import Logo from "../assets/img/logoAFW.png";
import Searchicon from "../static/Searchicon";
import Arrowdoubledown from "../static/Arrowdoubledown";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [arrayABC] = useState([
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]);
  function ABCClick() {
    return (
      <div className="o-letters">
        <ul>
          {arrayABC.map((letter, n) => (
            <li key={n}>{letter}</li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div className="header-main">
      <div className="logo-abc">
        <div className="logo-anime">
          <img src={Logo} alt="" />
        </div>
        <div className="abc-nav">
          <div className="search-abc">
            <ul>
              <li>A</li>
              <li>B</li>
              <li>C</li>
              <li>D</li>
              <li>E</li>
              <li>F</li>
              <li>
                <Arrowdoubledown />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="cont-header">
        <div className="search-nav">
          <input type="text" placeholder="Buscar..." />
          <div className="search-logo">
            {" "}
            <Searchicon />
          </div>
        </div>
        <Link className="login" to={""}>
          <div className="login-logo">
            <Iconninja />
          </div>
          <div className="textlogin">LOGIN</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
