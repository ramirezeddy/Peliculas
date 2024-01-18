import { useState,useEffect } from "react";
import './css/car.css'

export function Uso_de_estado (){
    const [cntd_likes,setCntd_likes]= useState(100);
    const [cambio_tema,setCambio_tema]= useState(false);
    const dar_like=()=>{
        setCntd_likes(cntd_likes+1);
    }
    const cambio_Team=()=>{
        setCambio_tema(true);
    }
    useEffect(dar_like,[]);
    
    return(
       
        
        <div className={cambio_tema?"on_page":"off_page"}>
           <div className="cabecera_estilo_uso_de_estado">
            <h1>CANTIDAD DE LIKES:{cntd_likes}</h1>
            <button 
            onClick={cambio_Team}>{cambio_tema?"☀️":"🌑"}</button>
           
           </div>
           <div className="estilo_uso_de_estado"> 
            <button 
             onClick={dar_like}>LIKE 👍</button>

            <button onClick={()=>{
                setCntd_likes(cntd_likes-1);
            }}>
                LIKE 👎
            </button>
           </div>

        </div>
    )

}