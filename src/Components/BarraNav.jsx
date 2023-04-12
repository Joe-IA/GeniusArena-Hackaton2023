import React, { useState } from "react";
import "../Styles/BarraNav.css";
import logo from "../Images/astrazeneca-logo-0.png";    
import { ImHome3 } from "react-icons/im";
import { VscGraphLine, VscSettingsGear } from "react-icons/vsc"; 
import { HiCheckCircle } from "react-icons/hi2";


export function BarraNav(){

    const [active, setActive ] = useState('home');


    return (
        <div className="BarraNav">
            <div className="logo">
                <img src={logo} alt="Logo Astrazeneca" className="logoImg"/>
            </div>
            <ul className="menu">
                <li className={`element ${active === 'home' ? 'active' : 'unactive'}`} id='home' onClick={() => setActive("home")}>
                    <div className="elementC">
                        Home
                        <ImHome3 className="icon home"/>
                    </div>
                    
                </li>
                <li className={`element ${active === 'dashboard' ? 'active' : 'unactive'}`} id="dashboard" onClick={() => setActive("dashboard")}>
                    <div className="elementC">
                        Dashboard
                    <HiCheckCircle className="icon dashboard"/>
                    </div>
                </li>
                <li className={`element ${active === 'logs' ? 'active' : 'unactive'}`} id="logs" onClick={() => setActive("logs")}>
                <div className="elementC">
                        Logs
                    <VscGraphLine className="icon logs"/>
                    </div>
                </li>
                <li className={`element ${active === 'settings' ? 'active' : 'unactive'}`} id="settings" onClick={() => setActive("settings")}>
                <div className="elementC">
                        Settings
                    <VscSettingsGear className="icon settings"/>
                    </div>
                </li>

            </ul>
        </div>
    )
}