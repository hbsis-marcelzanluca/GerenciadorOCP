import React, { Component } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

export default class InputPerfis extends Component {

    static propTypes = {
        name: React.PropTypes.string.isRequired,
        placeholder: React.PropTypes.string.isRequired,
        registros: React.PropTypes.array.isRequired
    }

    state = { registrosSelecionados: [] }

    transformarValores = registros =>
        registros.map((registro, indice) => { return { value: registro.id, label: registro.descricao } })

    aoSelecionar = (registrosSelecionados) => {
        debugger
        let { aoAlterar } = this.props
        this.setState({ registrosSelecionados: registrosSelecionados })

        if (typeof aoAlterar === 'function') {
            aoAlterar(registrosSelecionados)
        }
    }

    render() {
        let { registros = [], jaSelecionados = [] } = this.props
        let registrosTransformados = this.transformarValores(registros)
        let valores = this.props.multi
            ? [...jaSelecionados, ...this.state.registrosSelecionados]
            : this.state.registrosSelecionados[0]

        debugger

        return (
            <Select { ...this.props }
                value={ valores }
                options={ registrosTransformados }
                onChange={ selecionados => this.aoSelecionar(selecionados) }
            />
        )
    }
}
