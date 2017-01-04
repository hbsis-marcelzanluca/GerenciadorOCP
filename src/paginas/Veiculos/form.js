import React, { Component } from 'react'
import { Row, Col } from 'react-grid-system'
import { FlatButton } from 'material-ui'
import Formsy from 'formsy-react'
import FormsyText from 'formsy-material-ui/lib/FormsyText'
import HBSelect from '../../componentes/HBSelect'

const estilos = { botoesModal: { textAlign: 'right' } }

export default class FormularioVeiculo extends Component {

    state = { perfis: [], perfisSelecionados: [] }

    aoSalvar = dadosFormulario =>
        this.props.aoSalvar(dadosFormulario)

    aoSelecionarPerfis = perfisSelecionados =>
        this.setState({ perfisSelecionados });

    render() {
        let { descricao, placa, perfisSelecionados } = this.props.dados;

        return (
            <Formsy.Form onValidSubmit={ this.aoSalvar }>
        		<Row>
        			<Col md={ 6 }>
        				<FormsyText
        					name="descricao"
        					floatingLabelText="Descrição do Veículo"
        					value={ descricao }
        					fullWidth={ true }
        					required
        				/>
        			</Col>
        			<Col md={ 6 }>
        				<FormsyText
        					name="placa"
        					floatingLabelText="Placa do Veículo"
        					value={ placa }
        					fullWidth={ true }
        					required
        				/>
        			</Col>
        		</Row>

        		<Row>
        			<Col md={ 12 }>
        				<br/>
                        <HBSelect
                            multi
                            name="perfis"
                            placeholder="Selecione os perfis do veiculo"
                            registros={ [ { id: 1, descricao: "Registro 1" }, { id: 2, descricao: "Registro 2" }, { id: 3, descricao: "Registro 3" }, { id: 4, descricao: "Registro 4" } ] }
                            aoAlterar={ this.aoSelecionarPerfis }
                        />
        			</Col>
        		</Row>

        		<Row style={ estilos.botoesModal }>
        			<br/>
        			<FlatButton
        				label="Cancelar"
        				type="reset"
        				primary={ false }
        				onClick={ this.props.aoCancelar }
        			/>
        			<FlatButton
        				label="Salvar"
        				type="submit"
        				primary={ true }
        			/>
        		</Row>
        	</Formsy.Form>
        )
    }

}
