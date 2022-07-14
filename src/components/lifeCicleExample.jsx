import React, { Component } from 'react';

class LifeCicleExample extends Component {

    constructor(props) {
        super(props)
        console.log("Constructor cuando se instancia el componente")
    }

    componentDidMount() {
        console.log("Antes del montaje del componente")
    }
    componentDidMount() {
        console.log("cuando ya esta listo el montaje del componente, antes de renderizarlo")
    }
    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    componentWillReceiveProps(nextProps) {
        console.log("Si va a recibir nuevas props")
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Controlar si el componente debe actulizarse")
        //retorna true o false
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("justo antes de renderizarse")
    }
    //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
    componentDidUpdate(nextProps, nextState) {
        console.log("Justo despues de actualizarse")
    }
    componentWillUnmount() {
        console.log("Justo antes de desaparecer")
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default LifeCicleExample;
