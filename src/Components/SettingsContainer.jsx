import React from "react";
import { SettingElement} from "./SettingElement";
import "../Styles/SettingContainer.css"
import {Not, SP, TZ, IH, LS, API} from '../Code/SettingsData';

export function SettingsContainer(){
    return(
        <div className="SettingContainer">
            <div className="elementsContainer">
            <SettingElement name={Not.name} message={Not.message} />
            <SettingElement name={SP.name} message={SP.message} />
            <SettingElement name={TZ.name} message={TZ.message} />
            <SettingElement name={IH.name} message={IH.message} />
            <SettingElement name={LS.name} message={LS.message} />
            <SettingElement name={API.name} message={API.message} />
            </div>
        </div>
    )
}