import { useState } from "react";
import Iconninja from "../static/Iconninja";
import Logo from "../assets/img/IconoAFW.webp";
import Searchicon from "../static/Searchicon";
import Arrowdoubledown from "../static/Arrowdoubledown";
import { Link } from "react-router-dom";
import styles from "../components/Header.module.css";

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
      <div className={styles.oletters}>
        <ul>
          {arrayABC.map((letter, n) => (
            <li key={n}>{letter}</li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div className={styles.headermain}>
      <div className={styles.logoabc}>
        <div className={styles.logoanime}>
          <img src={Logo} alt="" />
        </div>
        <div className={styles.abcnav}>
          <div className={styles.searchabc}>
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
      <div className={styles.contheader}>
        <div className={styles.searchnav}>
          <input type="text" placeholder="Buscar..." />
          <div className={styles.searchlogo}>
            {" "}
            <Searchicon />
          </div>
        </div>
        <Link className={styles.login} to={"/Login"}>
          <div className={styles.loginlogo}>
            <Iconninja />
          </div>
          <div className={styles.textlogin}>LOGIN</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
