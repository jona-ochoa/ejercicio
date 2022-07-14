import React, { useState } from "react";

// ? estilo para usuario logueado
const loggedStyle = {
  color: "white",
  fontSize: "1.5rem",
  fontWeight: "bold",
};

// ? estilo para usuario nno logueado
const unLoggedStyle = {
  color: "tomato",
  fontWeight: "bold",
};

const GreetingStyled = (props) => {
  // Generamos un estado para el componente para saber si esta logueado
  const [logged, setLogged] = useState(false);

  const greetingUser = (<h2>Hola, {props.name}</h2>)
  const pleaseLogin = (<h2>Please logged</h2>)

  return (
    <div style={logged ? loggedStyle : unLoggedStyle}>
      {logged ? greetingUser : pleaseLogin}

      <button
        onClick={() => {
          console.log("Boton pulsado");
          setLogged(!logged);
        }}
      >
        {logged ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default GreetingStyled;
