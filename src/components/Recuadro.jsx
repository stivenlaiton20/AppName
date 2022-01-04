import { useState } from "react";
import PrintText from "./PrintText";
import useService from "../hooks/UseService";
 function Recuadro() {
    const [text, setText] = useState("")
    const [resultado, setResultado] = useState()
    let simulacionderequest = { 
        datos: {
        nacionalidades: [
            {
                country_id: "Col",
                probability: 0.002254
            },
            {  
                country_id: "arg",
                probability: 0.902254
            } 
 
        ],
        edad: 24,   
        genero: "male",
        }         
    }
    

    let  datos1 = useService(`https://api.nationalize.io/?name=${text}`)
    let  datos2 = useService(`https://api.agify.io/?name=${text}`)
    let  datos3 = useService(`https://api.genderize.io?name=${text}`)
    const handleInput = () => {
        setResultado({ ...simulacionderequest, nombre: text })
        let resultadofinal = {
            nacionalidades: datos1.data.country,
            edad: datos2.data.age,
            genero: datos3.data.gender
        }
        let nombre = document.getElementById('valorName').value;
        setText(nombre)
        
        if( simulacionderequest.datos.nacionalidades[0] !== undefined  ){
            console.log("estoy en el if 1  ", simulacionderequest.datos.nacionalidades)
            setResultado({ ...simulacionderequest, state: true, nombre: nombre })
            console.log(simulacionderequest)
            document.getElementById('valorName').value = "";
            
        }

        else{
            console.log("estoy en el else ", simulacionderequest.datos.nacionalidades[0])
            console.log('tambien entro')
            setResultado({ ...simulacionderequest, state: false}) 
        }
        
    };
    return (
        <>
        <p className="texto-introduc">En esta aplicación haremos una prediccion lo mas exacta posible de tu edad, genero y las posibles nacionalidades con sus respectivos valores de probabilidad.</p>
        <input placeholder="Ingresa Tu Nombre..." className="input-text"  id='valorName' ></input>
        <button className="btnprimario" onClick={handleInput}>Buscar</button>
        <div> {resultado ? <PrintText  resultado={resultado}  /> : ""}
        </div>
    
        </>
    );
}

export default Recuadro;
/*

            {
                country_id: "Col",
                probability: 0.002254
            },
            {  
                country_id: "arg",
                probability: 0.902254
            } 
            
            */
