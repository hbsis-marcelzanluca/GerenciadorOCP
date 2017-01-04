import React, { Component } from 'react'
import { obterTipo } from './Utils'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

export default class HBSelect extends Component {

    static propTypes = {
        name: React.PropTypes.string.isRequired,
        placeholder: React.PropTypes.string.isRequired,
        registros: React.PropTypes.array.isRequired
    }

    state = { registrosSelecionados: [] }

    transformarValores = registros =>
        registros.map((registro, indice) => { return { value: registro.id, label: registro.descricao } })

    aoSelecionar = (registrosSelecionados) => {
        let { aoAlterar } = this.props
        if (obterTipo(aoAlterar) === 'function')
            aoAlterar(registrosSelecionados)

        if (obterTipo(registrosSelecionados) === "object") {
            this.setState({ registrosSelecionados: [registrosSelecionados] })
        }
        else {
            this.setState({ registrosSelecionados })
        }
    }

    render() {
        let { registros = [], jaSelecionados = [] } = this.props
        let registrosTransformados = this.transformarValores(registros)

        return (
            <Select { ...this.props }
                value={ this.props.hasOwnProperty('multi') ? this.state.registrosSelecionados : this.state.registrosSelecionados[0] }
                options={ registrosTransformados }
                onChange={ selecionados => this.aoSelecionar(selecionados) }
            />
        )
    }
}
