import React from "react";
import "../Styles/BarraNav.css";
import logo from "../Images/astrazeneca-logo-0.png";    
import { ImHome3 } from "react-icons/im";
import { VscGraphLine, VscSettingsGear } from "react-icons/vsc"; 
import { HiCheckCircle } from "react-icons/hi2";


export function BarraNav(){

    const home = document.getElementById("home");
    const dashboard = document.getElementById("dashboard");
    const logs = document.getElementById("logs");
    const settings = document.getElementById("settings");




    return (
        <div className="BarraNav">
            <div className="logo">
                <img src={logo} alt="Logo Astrazeneca" className="logoImg"/>
            </div>
            <ul className="menu">
                <li className="element" id='home'>
                    <div className="elementC">
                        Home
                        <ImHome3 className="icon home"/>
                    </div>
                    
                </li>
                <li className="element" id="dashboard">
                    <div className="elementC">
                        Dashboard
                    <HiCheckCircle className="icon dashboard"/>
                    </div>
                </li>
                <li className="element" id="logs">
                <div className="elementC">
                        Logs
                    <VscGraphLine className="icon logs"/>
                    </div>
                </li>
                <li className="element" id="settings">
                <div className="elementC">
                        Settings
                    <VscSettingsGear className="icon settings"/>
                    </div>
                </li>

            </ul>
        </div>
    )
}