import React, { useState } from "react";
import { BiUser, BiLockAlt } from 'react-icons/bi';
import "../Styles/Login.css"
import Astrazeneca from "../Images/astrazeneca-logo-0.png";
import LoginImg from "../Images/image 5.png";
import Fondo from "../Images/Fondo.png";
import axios from "axios";

export function Login(){
    
        const [placeholderMail, setPlaceholderMail] = useState("Email");
        const handleFocusMail = () => {
            setPlaceholderMail("");
        }
        const handleBlurMail = () =>{
            setPlaceholderMail("Email");
        }

        const [placeholderPass, setPlaceholderPass] = useState("Password");

        const handleFocusPass = () => {
            setPlaceholderPass("");
        }

        const handleBlurPass = () => {
            setPlaceholderPass("Password")
        }

        const [email, setEmail] = useState("");
        const [contrasena, setContrasena] = useState("");

        const handleUsuario = (e) => {
            setEmail(e.target.value);
        }
        
        const handleContrasena = (e) => {
            setContrasena(e.target.value);
        }

        const handleLog = () => {
            axios.post("https://3dd2-177-231-135-134.ngrok-free.app/api/user/login", {email, contrasena})
            .then((response) => {
                const usuarios = response.data.usuarios;
                const usuarioValido = usuarios.find(u => u.email === email && u.password === contrasena);
            })
        }

    return(
        <div className="login">
            <img src={Fondo} alt="Fondo" className="fondo" />
            <img src={Astrazeneca} alt="Logo Astrazeneca" className="imagen"/>
            <h2>Welcome</h2>
            <h3>Login to our service status application</h3>
            <div className="input mail">
            <BiUser className="icono"/>
            <input type="email" name="email" autoComplete="off" id="email" className="in" placeholder={placeholderMail} onFocus={handleFocusMail} onBlur={handleBlurMail} />
            </div>
            <div className="input password">
            <BiLockAlt className="icono"/>
            <input type="password" name="password" autoComplete="off" id="password"  className="in" placeholder={placeholderPass} onFocus={handleFocusPass} onBlur={handleBlurPass}/>
            </div>
            <button className="button" onClick={handleLog}>Login</button>
            <p> Forgot password?</p>
            <img src={LoginImg} alt="Chava" className="loginImg" />
        </div>
    );
}
