import React from "react";
import PropTypes from "prop-types";
import { Linea } from "./linea";

const Contact = ({ linea }) => {

  return (
    <div>
      <h2>NOMBRE : {linea.nombre}</h2>
      <h3>APELLIDO : {linea.apellido}</h3>
      <h4>EMAIL : {linea.email}</h4>
      <h5>CONECTADO: {linea.conectado ? "CONTACTO EN LINEA" : "CONTACTO NO DISPONIBLE"}</h5>
    </div>
  );
};

Contact.propTypes = {
  linea: PropTypes.instanceOf(Linea)
};

export default Contact;
