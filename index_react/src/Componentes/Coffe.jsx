export function Coffe(){
   const caliente= true;
 
    <h1>OPERADOR TERNARIO omite el if ambiguo</h1>
    // if(caliente) {
    //     return(<p>el cafe está caliente!!!</p>)  // esto evalua true
    // }else{
    //      return(<p>el cafe está caliente!!!</p>)  // esto evalua true
    // }

    return (
    <div>
    <p>componente 1</p>
    <p>{caliente?"no se puede tomar auchh quemaa":"se puede tomar, delicioso!!!"}</p>
    <hr />
    </div>
    
    )
}
// export default coffe_fc;  /// otra manera mas facil es colocando export al inicio de la funcion clase