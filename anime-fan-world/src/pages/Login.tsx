import "./Login.css";
import Logo from "../assets/img/IconoAFW.webp";
import Iconuser from "../static/IconUser";
import IconPassword from "../static/IconPassword";
import LoginBoy from "../assets/img/LoginBoy.webp";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="main-login">
      <div className="cont-login">
        <img className="boy-login" src={LoginBoy}></img>
        <div className="icon-logo">
          <Link to={"/"}>
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="title">Iniciar Sesión</div>
        <form className="formlogin" action="">
          <div className="inputlogin">
            <input type="text" required />
            <Iconuser></Iconuser>
            <span className="line"></span>
            <span className="text-p">Usuario</span>
          </div>
          <div className="inputlogin">
            <input type="password" required />
            <IconPassword></IconPassword>
            <span className="line"></span>
            <span className="text-p">Contraseña</span>
          </div>
          <button className="btn-iniciar">INICIAR SESIÓN</button>
        </form>
        <div className="register">
          <p>¿No tienes cuenta?</p> <span>Registrate</span>
        </div>
      </div>
    </div>
  );
};

export default Login;