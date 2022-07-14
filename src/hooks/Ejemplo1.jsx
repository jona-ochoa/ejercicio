import React, {useState} from 'react';

const Ejemplo1 = () => {

    const valorInicial = 0;
    const personaInicial = {
        nombre : 'Jonatan',
        email : 'jonatan@gmail.com'
    }

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    function incrementarContador(){
        setContador(contador + 1)
    }

    function actualizarPersona(nombre){
        setPersona(
            {
                nombre : 'Pepe',
                email: 'pepe@hotmail.com'
            }
        )
    }

    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>  
            <h2>CONTADOR : {contador}</h2> 
            
            <h2>DATOS DE LA PERSONA :</h2>         
            <h3>NOMBRE : {persona.nombre}</h3>
            <h3>EMAIL : {persona.email}</h3>
            <div style={{padding:5}}>
                <button style={{backgroundColor:'#000', color:'#2f8', padding:15, borderRadius:30, fontWeight:'bolder'}} onClick={incrementarContador}>Incrementar Contador</button>
                <button style={{backgroundColor:'#000', color:'#2f8', padding:15, borderRadius:30, fontWeight:'bolder'}} onClick={actualizarPersona}>Actualizar Persona</button>
            </div>
        </div>
    );
}

export default Ejemplo1;
