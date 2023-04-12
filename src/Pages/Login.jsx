import React, { useState } from "react";
import { BiUser, BiLockAlt } from 'react-icons/bi';
import "../Styles/Login.css"
import Astrazeneca from "../Images/astrazeneca-logo-0.png";
import LoginImg from "../Images/image 5.png";
import Fondo from "../Images/Fondo.png";
import {useNavigate} from "react-router-dom";
import axios from "axios";


export function Login(){
    const nav = useNavigate();
    const API_URL = "https://0081-177-231-135-134.ngrok-free.app/api/user/login";
    
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

        const handleEmail = (e) => {
            setEmail(e.target.value);
            console.log(email)
        }
        
        const handleContrasena = (e) => {
            setContrasena(e.target.value);
            console.log(contrasena)
        }

        const handleLog = async () => {
            axios.post(API_URL, {"email": email, "password": contrasena})
            .then(() => {
                nav('/');
            })
            .catch(() => {
                document.getElementById("email").value = "";
                document.getElementById("password").value = "";
              });
        }

    return(
        <div className="login">
            <img src={Fondo} alt="Fondo" className="fondo" />
            <img src={Astrazeneca} alt="Logo Astrazeneca" className="imagen"/>
            <h2>Welcome</h2>
            <h3>Login to our service status application</h3>
            <div className="input mail">
            <BiUser className="icono"/>
            <input type="email" name="email" autoComplete="off" id="email" className="in" placeholder={placeholderMail} onFocus={handleFocusMail} onBlur={handleBlurMail} onChange={handleEmail}/>
            </div>
            <div className="input password">
            <BiLockAlt className="icono"/>
            <input type="password" name="password" autoComplete="off" id="password"  className="in" placeholder={placeholderPass} onFocus={handleFocusPass} onBlur={handleBlurPass} onChange={handleContrasena}/>
            </div>
            <button className="button" onClick={handleLog}>Login</button>
            <p> Forgot password?</p>
            <img src={LoginImg} alt="Chava" className="loginImg"/>
        </div>
    );
}
