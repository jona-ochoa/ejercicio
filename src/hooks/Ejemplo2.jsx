import React, { useEffect, useRef, useState } from "react";

const Ejemplo2 = () => {
  // vamos a crear dos contadores distintos
  // cada uno en un estado diferente
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  //vamos a generar una referencia con useRef() para asociar una variable
  //con un elemento del DOM
  const miRef = useRef();

  function incrementar1() {
    setContador1(contador1 + 1);
  }
  function incrementar2() {
    setContador2(contador2 + 1);
  }

//   useEffect(() => {
//     console.log("cambio en el estado del componente");
//     console.log(miRef);
//   });

    useEffect(() => {
        console.log("cambio en el estado del contador1");
        console.log(miRef);
    }, [contador1]);

  return (
    <div>
      <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
      <h2>CONTADOR 1 : {contador1}</h2> 
      <h2>CONTADOR 2 : {contador2}</h2>
      <h3 ref={miRef}>Ejemplo de elemento referencia</h3>
      <div style={{ padding: 5 }}>
        <button
          style={{
            backgroundColor: "#000",
            color: "#2f8",
            padding: 15,
            borderRadius: 30,
            fontWeight: "bolder",
          }}
          onClick={incrementar1}
        >
          Incrementar 1
        </button>
        <button
          style={{
            backgroundColor: "#000",
            color: "#2f8",
            padding: 15,
            borderRadius: 30,
            fontWeight: "bolder",
          }}
          onClick={incrementar2}
        >
         Incrementar 2
        </button>
      </div>
    </div>
  );
};

export default Ejemplo2;
