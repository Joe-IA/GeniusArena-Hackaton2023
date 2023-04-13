import React from "react";
import { BarraNav } from "../Components/BarraNav";
import { PersonalLog } from "../Components/PersonalLog";
import { SettingsContainer } from "../Components/SettingsContainer";


export function Settings(){
    return(
        <div className="Settings">
            <BarraNav/>
            <PersonalLog notificacion={false} nomPag="Settings" />
            <SettingsContainer />
        </div>
    )
}