import Logo from "../../assets/img/IconoAFW.webp";
import Iconuser from "../../assets/Icons/IconUser";
import IconPassword from "../../assets/Icons/IconPassword";
import LoginBoy from "../../assets/img/LoginBoy.webp";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.mainlogin}>
      <div className={styles.contlogin}>
        <img className={styles.boylogin} src={LoginBoy}></img>
        <div className={styles.iconlogo}>
          <Link to={"/"}>
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className={styles.title}>Iniciar Sesión</div>
        <form className={styles.formlogin} action="">
          <div className={styles.inputlogin}>
            <input type="text" required />
            <Iconuser></Iconuser>
            <span className={styles.line}></span>
            <span className={styles.textp}>Usuario</span>
          </div>
          <div className={styles.inputlogin}>
            <input type="password" required />
            <IconPassword></IconPassword>
            <span className={styles.line}></span>
            <span className={styles.textp}>Contraseña</span>
          </div>
          <button type="submit" className={styles.btniniciar}>INICIAR SESIÓN</button>
        </form>
        <div className={styles.register}>
          <p>¿No tienes cuenta?</p> <Link to={"/Register"}>Registrate</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
