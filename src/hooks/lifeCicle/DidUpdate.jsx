import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {

  componentDidUpdate() {
    console.log("Comportamiento cuando el componente recibe nueevos props o cambio en su estado privado")
  }

  render() {
    return (
      <div>
        <h1>DidUpdated</h1>
      </div>
    )
  }
}

export const DidUpdateHook = () => {
  useEffect(() => {
    console.log("")
  });
    return (
        <div>
            <h1>DidUpdated</h1>
        </div>
    );
}

