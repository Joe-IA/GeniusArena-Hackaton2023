import React from "react";
import '../Styles/Category.css';
import {BsPeople, BsGraphUp , BsSearch, BsCheckCircle} from 'react-icons/bs';
import {GrDocumentCloud} from 'react-icons/gr';



export function Category({tipo}){

    let icono;

    switch(tipo){
      case "Human Resources":
        icono = <BsPeople className="catIcon" />;
        break;
      case "Finances":
        icono = <BsGraphUp className="catIcon" />;
        break;
      case "Research":
        icono = <BsSearch className="catIcon" />;
        break;
      case "Development":
        icono = <GrDocumentCloud className="catIcon" />;
        break;
    }

    return(

    <div className="Category">
        {icono}
        <p className="etiqueta">{tipo}</p>
        <BsCheckCircle className={`catStatus ${tipo}`}/>
        <p className="status">Normal</p>
    </div>        
    )
}