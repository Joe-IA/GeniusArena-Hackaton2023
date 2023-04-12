import React from "react";
import { BarraNav } from "../Components/BarraNav";
import { PersonalLog } from "../Components/PersonalLog";
import '../Styles/MainPage.css';
import { MainContainer } from "../Components/MainContainer";

export function MainPage(){
    return (
        <div className="MainPage">
            <BarraNav />    
            <PersonalLog nomPag="Service status application" notificacion={false}/>
            <MainContainer/>
        </div>
    )
}
