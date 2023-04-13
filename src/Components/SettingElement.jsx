import React from "react";
import {BiBell} from "react-icons/bi";
import {GiSettingsKnobs} from "react-icons/gi";
import {TfiAlarmClock} from 'react-icons/tfi';
import {AiOutlineHistory, AiOutlineCloudServer} from "react-icons/ai";
import {HiTranslate} from "react-icons/hi";
import "../Styles/SettingElement.css";


export function SettingElement({name, message}){
    let icono;
    switch(name){
        case "Notification settings":
            icono = <BiBell className="sIcon"/>
            break;
        case 'Service preferences':
            icono = <GiSettingsKnobs className="sIcon"/>
            break;
        case "Timezone settings":
            icono = <TfiAlarmClock className="sIcon time"/>
            break;
        case "Incident history":
            icono = <AiOutlineHistory className="sIcon"/>
            break;
        case "Language settings":
            icono =<HiTranslate className="sIcon"/>
            break;
        case "API access":
            icono = <AiOutlineCloudServer className="sIcon"/>
    }
    return(
        <div className="SettingElement">
            <div className="name">{name}</div>
            <div className="message">{message}</div>
            {icono}
        </div>
    )
}