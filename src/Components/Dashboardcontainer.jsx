import React from "react";
import '../Styles/Dashboardcontainer.css';
import { DashC } from "./DashC";

export function Dashboardcontainer(){
    return(
    <div className="DashboardContainer">
        <DashC tipo="Human Resources" />
        <DashC tipo="Finance"  />
        <DashC tipo="Development" />
        <DashC tipo="Research"/>
    </div>
    )
}