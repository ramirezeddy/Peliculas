import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import {Coffe} from './Componentes/Coffe';
// import {Usuario} from './Componentes/Usuario';
import {Car} from './Componentes/Car';
import { Pokemon } from './Componentes/Pokemon';
import { Uso_de_estado } from './Componentes/Uso_de_estado';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <Coffe/>
      <Usuario nombre="EDDY" apellido="Ramirez" edad={26} direccion={{
        pais:"ECUADOR",
        ciudad:"Guayaquil",
        telf:91238033
      }}/ >
      <Usuario nombre="CHILAN" apellido="Holguin" edad={25} direccion={{
        pais:"ECUADOR",
        ciudad:"Daule",
        telf:91238033
      }} / >
      <Usuario nombre="CARLOS" apellido="REALPE" edad={23} direccion={{
        pais:"ECUADOR",
        ciudad:"Duran",
        telf:91238033
      }} / >
      <Usuario nombre="SANDY" apellido="JIMENEZ" edad={24} direccion={{
        pais:"ECUADOR",
        ciudad:"Samborondon",
        telf:912380
      }} / > */}
     

    {/* <Car estado={true}/> */}
    {/* <Pokemon/> */}
      <Uso_de_estado/>

  </React.StrictMode>
);

