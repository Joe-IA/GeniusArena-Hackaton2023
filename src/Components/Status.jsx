import React from 'react';
import "../Styles/Status.css";
import {SlArrowRight} from 'react-icons/sl'


export function Status({notificacion}) {
  return (
   ( <div className='contenedor-notificacion'>
         {notificacion ? (
         <img className= 'imagen-tacha' src={require('../Images/image 11.png')} alt='tacha'/> 
         ): (<img className= 'imagen-paloma' src={require('../Images/image 8.png')} alt='paloma'/> )}
         {notificacion ? (<div className='message'><p className= 'alerta-system-down'> Some Systems are Down or Not Operating </p><p className='updated down'>Last updated today: 11:56 AM UTC-6 </p></div>) : (<div className='message'><p className= 'alerta-system-up'> All Systems are Up and Operating</p><p className='updated up'>Last updated today: 12:02 PM UTC-6</p></div>)}
         <a href="/dashboard">
         <SlArrowRight  className='arrow'/>
         </a>
         
     </div>
    )
  )
}