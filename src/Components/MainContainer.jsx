import React from "react";
import '../Styles/MainContainer.css';
import { Status } from '../Components/Status'
import { CuadradoMain } from "./CuadradoMain";

export function MainContainer(){
    return(
        <div className="MainContainer">
            <Status />
            <CuadradoMain />
        </div>
    )
}