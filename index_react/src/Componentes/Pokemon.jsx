import './css/car.css'
const lista_pokemones= [
    {
        id:1,
        nombre:"PIKACHU",
        imagen:"https://w7.pngwing.com/pngs/8/891/png-transparent-pikachu-thumbnail.png",
        tipo:"electrico"
    },
    {
        id:2,
        nombre:"CHARIZARD",
        imagen:"https://c0.klipartz.com/pngpicture/278/675/sticker-png-charizard-pikachu-pokemon-x-and-y-pikachu-dragon-carnivoran-orange-cartoon-fictional-character-thumbnail.png",
        tipo:"fuego"
    }
];

export function Pokemon(){
  
    return lista_pokemones.map((item)=>{
            return(
                <div className="carta_pokemon" key={item.id}>
                    <hr />
                        <h2>NOMBRE: {item.nombre}</h2>
                        <img src={item.imagen} width="100px"/>
                        <p>TIPO: {item.tipo}</p>
                    <hr />
                </div>
            );
        });
    

}