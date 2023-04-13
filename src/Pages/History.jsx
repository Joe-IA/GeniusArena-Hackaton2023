import React from "react";
import { BarraNav } from "../Components/BarraNav";
import { PersonalLog } from "../Components/PersonalLog";
import { HistoryContainer } from "../Components/Historycontainer";
import '../Styles/MainPage.css';


export function History(){
    return (
        <div className="History">
            <BarraNav />    
            <PersonalLog nomPag="Incident History" notificacion={false}/>
            <HistoryContainer />
        </div>
    )
}