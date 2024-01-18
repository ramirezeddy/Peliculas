import './css/car.css'

export function Car({estado}){
    return(
        <div className='estilo_card'>
            <h1>MI PRIMER POKEDEX</h1>
            <p className={estado?"encendido": "apagado"}>📍 ENCENDIDO</p>
          
        </div>
    )
}