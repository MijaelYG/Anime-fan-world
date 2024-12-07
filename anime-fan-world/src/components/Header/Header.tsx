//import { useState } from "react";
import IconNinja from "../../assets/Icons/IconNinja";
import Logo from "../../assets/img/IconoAFW.webp";
import Searchicon from "../../assets/Icons/Searchicon";
import Arrowdoubledown from "../../assets/Icons/Arrowdoubledown";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";

const Header = () => {
  const { id, usuario } = useContext(UserContext);
  const [optionsUser, setOptionsUser] = useState<Boolean>(false);
  /*const [arrayABC] = useState([
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
  }*/

  function BtnOptions() {
    setOptionsUser(true);
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
        {usuario && id ? (
          <>
            <button onClick={BtnOptions} className={styles.loginbtn}>
              <div className={styles.loginlogo}>
                <IconNinja />
              </div>
              <div className={styles.textlogin}>{usuario}</div>
              {optionsUser && <div className={optionsUser && "prueba"}></div>}
            </button>
          </>
        ) : (
          <Link className={styles.login} to={"/Login"}>
            <div className={styles.loginlogo}>
              <IconNinja />
            </div>
            <div className={styles.textlogin}>LOGIN</div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
