import { Link } from "react-router-dom";
import styles from "./Register.module.css";
import Logo from "../../assets/img/IconoAFW.webp";
import IconUser from "../../assets/Icons/IconUser";
import IconLastName from "../../assets/Icons/IconLastName";
import IconNinja from "../../assets/Icons/Iconninja";
import IconEmail from "../../assets/Icons/IconEmail";
import IconPassword from "../../assets/Icons/IconPassword";
import IconPasswordOpen from "../../assets/Icons/IconPasswordOpen";
import RegisterBoy from "../../assets/img/RegisterBoy.webp";
import { fetchCrearCuentaUsuario, Usuario } from "../../Services/UserServices";
import { useState } from "react";

const Register = () => {
  const [usuario, setUsuario] = useState<Usuario>({
    Nombres:'',
    Apellidos:'',
    Usuario: '',
    Password:'',
    Correo:''
  });

  const btnregister = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    console.log(usuario.Nombres);
  }

  return (
    <div className={styles.mainregister}>
      <div className={styles.contregister}>
        <img className={styles.boyregister} src={RegisterBoy}></img>
        <div className={styles.iconregister}>
          <Link to={"/"}>
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className={styles.title}>Registrate</div>
        <form onSubmit={btnregister} className={styles.formregister}>
          <div className={styles.inputregister}>
            <input type="text" value={usuario.Nombres} onChange={((e) => setUsuario({...usuario, Nombres: e.target.value}))} required />
            <IconUser></IconUser>
            <span className={styles.line}></span>
            <span className={styles.textp}>Nombres</span>
          </div>
          <div className={styles.inputregister}>
            <input type="text" value={usuario.Apellidos} onChange={((e) => setUsuario({...usuario, Apellidos: e.target.value}))} required />
            <IconLastName></IconLastName>
            <span className={styles.line}></span>
            <span className={styles.textp}>Apellidos</span>
          </div>
          <div className={styles.inputregister}>
            <input type="text" value={usuario.Usuario} onChange={((e) => setUsuario({...usuario, Usuario: e.target.value }))} required />
            <IconNinja></IconNinja>
            <span className={styles.line}></span>
            <span className={styles.textp}>Usuario</span>
          </div>
          <div className={styles.inputregister}>
            <input type="text" value={usuario.Correo} onChange={((e)=> setUsuario({...usuario, Correo:e.target.value}))} required />
            <IconEmail></IconEmail>
            <span className={styles.line}></span>
            <span className={styles.textp}>Correo Electronico</span>
          </div>
          <div className={styles.inputregister}>
            <input type="password" value={usuario.Password} onChange={((e) => setUsuario({...usuario, Password: e.target.value}))} required />
            <IconPassword></IconPassword>
            <span className={styles.line}></span>
            <span className={styles.textp}>Contraseña</span>
          </div>
          <div className={styles.inputregister}>
            <input type="password"  required />
            <IconPasswordOpen></IconPasswordOpen>
            <span className={styles.line}></span>
            <span className={styles.textp}>Repetir Contraseña</span>
          </div>
          <button type="submit" className={styles.btnregister}>REGISTRAR CUENTA</button>
        </form>
        <div className={styles.register}>
          <p>¿Ya te creaste una cuenta?</p>{" "}
          <Link to={"/Login"}>Ingresa aqui</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
