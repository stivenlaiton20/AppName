export default function PrintText( resultado ) {

    
    resultado = resultado.datos
    console.log(resultado)
    
    

    if(resultado.state === true){
        const nacionalidades = resultado.nacionalidades
        return (
      <div className="print-text">
        <h2>Estos son los siguientes datos para: {resultado.nombre}</h2>
        <h3 >Su edad es: {resultado.edad}</h3>
        <h3 >Su genero es: {resultado.genero}</h3>
        <ol >y sus nacionalidades pueden ser: {nacionalidades.map((nacionalidad) => {
            return <li  key={nacionalidades.lenght}>  {nacionalidad.country_id} con una probabilidad del: {nacionalidad.probability}</li>
        })}</ol>
      </div>
    );

    }
    else{
        return (
        <div className="print-text">
        <h3>no hay datos</h3>
        </div>
        )
    }

  }
   

  
