import React, { Component } from 'react'
import Navegacao from '../componentes/Navegacao'

const estilos = { root: { margin: 0 } }

export default class LayoutApp extends Component {

    render() {
        return (
    		<div style={ estilos.root }>
                <Navegacao />
                <br/>

    			{ /* Este é o 'body' da aplicação (Não remova) */ }
    			{ this.props.children }
    		</div>
    	)
    }

}
