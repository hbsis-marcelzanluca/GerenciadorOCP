import React, { Component } from 'react'
import { Row, Col } from 'react-grid-system'
import { FlatButton } from 'material-ui';
import Formsy from 'formsy-react'
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import InputPerfis from './Perfis/perfis.input'

const estilos = { botoesModal: { textAlign: 'right' } }

const formulario = (aoSalvar, aoCancelar, dados) => (
    <Formsy.Form onValidSubmit={ aoSalvar }>
        <Row>
            <Col md={ 6 }>
                <FormsyText
                    name="descricao"
                    floatingLabelText="Descrição do Veículo"
                    value={ dados.descricao }
                    fullWidth={ true }
                    required
                />
            </Col>
            <Col md={ 6 }>
                <FormsyText
                    name="placa"
                    floatingLabelText="Placa do Veículo"
                    value={ dados.placa }
                    fullWidth={ true }
                    required
                />
            </Col>
        </Row>

        <Row>
            <Col md={ 12 }>
                <br/>
                {/* <Select
                    name="perfis"
                    multi
                    value={ this.state.perfisSelecionados }
                    placeholder="Selecione os perfis para o veículo"
                    options={ this.state.perfis }
                    onChange={ selecionados => this.aoSelecionar(selecionados) }
                /> */}
            </Col>
        </Row>

        <Row style={ estilos.botoesModal }>
            <br/>
            <FlatButton
                label="Cancelar"
                type="reset"
                primary={ false }
                onClick={ () => aoCancelar() }
            />
            <FlatButton
                label="Salvar"
                type="submit"
                primary={ true }
            />
        </Row>
    </Formsy.Form>
)

export default class FormularioVeiculo extends Component {

    state = { perfis: [ { value: 1, label: 'Teste' } ], perfisSelecionados: [] }

    aoSalvar = dadosFormulario => this.props.aoSalvar(dadosFormulario)

    aoSelecionar = perfisSelecionados => this.setState({ perfisSelecionados })

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
                        <InputPerfis />
        				
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
