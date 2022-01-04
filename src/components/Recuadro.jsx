import { useState } from "react";
import PrintText from "./PrintText";
import useService from "../hooks/UseService";
 function Recuadro() {
    const [text, setText] = useState("")
    const [resultado, setResultado] = useState( )
    const cargarname = () => {
        let nombre = document.getElementById('valorName').value;
        setText(nombre)
    } 
    const  datos1 = useService(`https://api.nationalize.io/?name=${text}`)
    const  datos2 = useService(`https://api.agify.io/?name=${text}`)
    const  datos3 = useService(`https://api.genderize.io?name=${text}`)
    const handleInput = () => {
        let resultadofinal = {
            nombre: datos1.data.name,
            nacionalidades: datos1.data.country,
            edad: datos2.data.age,
            genero: datos3.data.gender
        }
        setResultado(resultadofinal)
        if( resultadofinal.nacionalidades[0] !== undefined  ){
            setResultado({ ...resultadofinal, state: true })
            document.getElementById('valorName').value = ""
        }
        else{
            setResultado({ ...resultadofinal, state: false}) 
        }        
    };
    return (
        <>
        <p className="texto-introduc">En esta aplicación haremos una prediccion lo mas exacta posible de tu edad, genero y las posibles nacionalidades con sus respectivos valores de probabilidad.</p>
        <input placeholder="Ingresa Tu Nombre..." className="input-text" onChange={cargarname} id='valorName' ></input>
        <button className="btnprimario" onClick={handleInput}>Buscar</button>
        <div> {resultado ? <PrintText  datos={resultado}  /> : ""}
        </div>
    
        </>
    );
}

export default Recuadro;

