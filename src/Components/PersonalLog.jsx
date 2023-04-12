import React from "react";
import "../Styles/PersonalLog.css"
import { CiBellOn } from "react-icons/ci";
import { BsFillCircleFill } from "react-icons/bs";
import User from "../Images/Foto.jpg";

export function PersonalLog({ nomPag, notificacion }){
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    return(
        <div className="personalLog">
            <ul className="barra">
                <li className="elemento">{nomPag}</li>
                <li className="bellIcon-contenedor">
                    <CiBellOn className="bellIcon"/>
                    {notificacion ? <BsFillCircleFill className="redBall" /> : ''.trimEnd()}
                </li>
                <li className="fotoElemento">
                    <img src={User} alt="Foto" className="foto" />
                </li>
            </ul>
        </div>
    )
}