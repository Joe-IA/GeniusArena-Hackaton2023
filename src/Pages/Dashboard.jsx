import React from "react";
import { BarraNav } from "../Components/BarraNav";
import { PersonalLog } from "../Components/PersonalLog";
import '../Styles/Dashboard.css';
import { Dashboardcontainer } from "../Components/Dashboardcontainer";


export function Dashboard(){
    return (
        <div className="Dashboard">
            <BarraNav />
            <PersonalLog nomPag="Today's Performance Dashboard" notificacion={false}/>
            <Dashboardcontainer />

        </div>
    )
}