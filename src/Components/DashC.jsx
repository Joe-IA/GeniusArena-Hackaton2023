import React from "react";
import '../Styles/DashC.css';
import {BsCheckCircle} from 'react-icons/bs';
import {SlArrowRight} from 'react-icons/sl'

export function DashC({tipo}){
    return(
        <div className="DashC">
            <p className="catName">{tipo}</p>
            <p className={`catStat ${tipo}c`}>Normal</p>
            <BsCheckCircle  className="iconStatus" />
            <SlArrowRight className="arrowIcon" />
        </div>
    )
}