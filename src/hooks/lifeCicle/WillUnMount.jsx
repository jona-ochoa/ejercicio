import React, { Component, useEffect } from 'react'

export class WillUnMount extends Component {
    componentWillUnmount() {
        console.log("Comportamiento antes que el componente desaparezca")
    }
  render() {
    return (
      <div>
        <h1>WillUnMount</h1>
      </div>
    )
  }
}


export const WillUnMountHook = () => {
    useEffect(() => {
        
        return () => {
            console.log("Comportamiento antes que el componente desaparezca")
        };
    }, []);
    return (
        <div>
            <h1>WillUnMount</h1>
        </div>
    );
}


