import React, { useState } from "react";
import "../Styles/BarraNav.css";
import logo from "../Images/astrazeneca-logo-0.png";    
import { ImHome3 } from "react-icons/im";
import { VscGraphLine, VscSettingsGear } from "react-icons/vsc"; 
import { HiCheckCircle } from "react-icons/hi2";


export function BarraNav(){

    return (
        <div className="BarraNav">
            <div className="logo">
                <img src={logo} alt="Logo Astrazeneca" className="logoImg"/>
            </div>
            <ul className="menu">
            <a href="/">
                <li className={`element ${window.location.pathname === '/'? 'active' : 'unactive'}`} id='home'>
                    <div className="elementC">
                        Home
                        <ImHome3 className="icon home"/>
                    </div>
                </li>
                </a>
                <a href='/dashboard'>
                <li className={`element ${window.location.pathname === '/dashboard'? 'active' : 'unactive'}`} id="dashboard">
                    <div className="elementC">
                        Dashboard
                    <HiCheckCircle className="icon dashboard"/>
                    </div>
                </li>
                </a>
                <a href="/history">
                <li className={`element ${window.location.pathname === '/history'? 'active' : 'unactive'}`} id="logs">
                <div className="elementC">
                        Logs
                    <VscGraphLine className="icon logs"/>
                    </div>
                </li>
                </a>
                <a href="/settings">
                <li className={`element ${window.location.pathname === '/settings'? 'active' : 'unactive'}`} id="settings">
                <div className="elementC">
                        Settings
                    <VscSettingsGear className="icon settings"/>
                    </div>
                </li>
                </a>

            </ul>
        </div>
    )
}