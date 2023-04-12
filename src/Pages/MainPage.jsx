import React from "react";
import { BarraNav } from "../Components/BarraNav";
import { PersonalLog } from "../Components/PersonalLog";

export function MainPage(){
    return (
        <div className="MainPage">
            <BarraNav />
            <PersonalLog nomPag="Service status application" notificacion={false}/>
        </div>
    )
}
