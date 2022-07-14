import React, {useState, useContext, createContext} from 'react';


const miContexto = React.createContext(null)
const Componente1 = () => {
    const state = useContext(miContexto)
    return (
        <div>
            <h1>
                El token es : {state.token}
            </h1>
            <Componente2 />
        </div>
    );
}

const Componente2 = () => {
    const state = useContext(miContexto)
    return (
        <div>
            <h2>
                La sesión es : {state.sesion}
            </h2>
        </div>
    );
}

export default function MiComponenteConContexto() {
    const estadoInicial = {
        token: 1234567,
        sesion: 1
    }

    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSessionData(
            {
                sesion: sessionData.sesion + 1,
                token: 'jwt12345678',
            },
         
        )
    }

  return (
    <miContexto.Provider value={sessionData}>
        <Componente1 />
        <button onClick={actualizarSesion}>Actualizar sesion</button>
    </miContexto.Provider>
  )
}



