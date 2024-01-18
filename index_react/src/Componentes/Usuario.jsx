export function Usuario(props){  /// en vez de props puedes declarar los parametros asi {var}
    // const usuarios={
    //     id:1,
    //     nombre:"eddy",
    //     apellido: "ramirez",
    //     edad:20
    // }   
    return(
       <div>
   
        <h1>DATOS USUARIO</h1>
        <p>componente 2</p>
            {/* <h3>Nombre:{usuarios.nombre}</h3> 
            <h3>Apellido:{usuarios.apellido}</h3>
            <h3>Edad:{usuarios.edad}</h3>
            */}
            <h3>Nombre:{props.nombre}</h3> 
            <h3>Apellido:{props.apellido}</h3>
            <h3>Edad:{props.edad}</h3>
            <h3>Dirección </h3>
                <p>PAIS: {props.direccion.pais}</p> 
                <p>CIUDAD: {props.direccion.ciudad}</p>
                {console.log(typeof(props.edad))}
        <hr />
       </div>
       )
}