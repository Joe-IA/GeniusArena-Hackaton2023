import React from "react";
import {SlArrowRight, SlArrowLeft} from 'react-icons/sl';
import { AiFillSetting } from 'react-icons/ai';
import'../Styles/Historial.css';


export function Historial(){
    return(
    <div className="Historial">
        <div className="encabezado">
        <SlArrowLeft className="arrowLeft" />
        <p className="period">February 2023 to April 2023</p>
        <SlArrowRight className="arrowRight" />
        </div>
        <div className="monthC">
            <h2 className="month">April 2023</h2>
        </div>
        <div className="April">
            <div className="incident">
                <AiFillSetting className="incidentIcon"/>
                <h3 className="yellow">Incident with Development</h3>
                <p className="info">This incident has been resolved</p>
                <p className="info">April 12, 9:23AM - 12:02PM UTC-6</p>
            </div>
            <div className="incident">
            <AiFillSetting className="incidentIcon"/>
                <h3 className="yellow">Incident with Human resources</h3>
                <p className="info">This incident has been resolved</p>
                <p className="info">April 7, 11:04AM - 12:02PM UTC-6</p>
            </div>
            <div className="incident">
            <AiFillSetting className="incidentIcon"/>
                <h3 className="yellow">Incident with finances</h3>
                <p className="info">This incident has been resolved</p>
                <p className="info">April 5, 11:40AM - 12:02PM UTC-6</p>
            </div>
        </div>
        <div className="monthC">
            <h2 className="month">March 2023</h2>
        </div>
        <div className="March">
            <div className="incident">
            <AiFillSetting className="incidentIcon"/>
                <h3 className="red">Incident with Development</h3>
                <p className="info">This incident has been resolved</p>
                <p className="info">March 12, 9:23AM - 12:02PM UTC-6</p>
            </div>
            <div className="incident">
            <AiFillSetting className="incidentIcon"/>
                <h3 className="red">Incident with Human resources</h3>
                <p className="info">This incident has been resolved</p>
                <p className="info">March 7, 11:04AM - 12:02PM UTC-6</p>
            </div>
            <div className="incident">
            <AiFillSetting className="incidentIcon"/>
                <h3 className="yellow">Incident with finances</h3>
                <p className="info">This incident has been resolved</p>
                <p className="info">March 5, 11:40AM - 12:02PM UTC-6</p>
            </div>
        </div>
        <div className="monthC">
            <h2 className="month">February 2023</h2>
        </div>
        <div className="February">
            <div className="incident">
            <AiFillSetting className="incidentIcon"/>
                <h3 className="red">Incident with Development</h3>
                <p className="info">This incident has been resolved</p>
                <p className="info">February 12, 9:23AM - 12:02PM UTC-6</p>
            </div>
            <div className="incident">
            <AiFillSetting className="incidentIcon"/>
                <h3 className="yellow">Incident with Human resources</h3>
                <p className="info">This incident has been resolved</p>
                <p className="info">February 7, 11:04AM - 12:02PM UTC-6</p>
            </div>
            <div className="incident">
            <AiFillSetting className="incidentIcon"/>
                <h3 className="red">Incident with finances</h3>
                <p className="info">This incident has been resolved</p>
                <p className="info">February 5, 11:40AM - 12:02PM UTC-6</p>
            </div>
        </div>
    </div>
    )
}