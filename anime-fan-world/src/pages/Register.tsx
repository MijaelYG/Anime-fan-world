import { Link } from "react-router-dom";
import "./Register.css";
import Logo from "../assets/img/IconoAFW.webp";

const Register = () => {
  return (
    <div className="main-register">
      <div className="cont-register">
        <div className="icon-register">
          <Link to={"/"}>
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="title">Iniciar Sesión</div>
        <form action="" className="form-register">
          <div className="inputregister">
            <input type="text" required />
            <span className="liner"></span>
            <span className="text-r">Nombres</span>
          </div>
          <div className="inputregister">
            <input type="text" required />
            <span className="liner"></span>
            <span className="text-r">Apellidos</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
