import React from "react";
import '../Styles/CuadradoMain.css'
import { Category } from "./Category";


export function CuadradoMain(){
    return(
        <div className="CuadradoMain">
            <Category tipo="Human Resources" />
            <Category tipo="Finances" />
            <Category tipo="Research" />
            <Category tipo="Development" />
        </div>
    )
}