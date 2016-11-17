import React, { Component } from 'react'
import { Dialog, Card, CardTitle, CardText, FloatingActionButton } from 'material-ui'
import { Container } from 'react-grid-system'
import IconeAdicionar from 'material-ui/svg-icons/content/add'
import Tabela from '../../componentes/Tabela'
import FormularioVeiculo from './form'

const estilos = {
    botaoNovoRegistro: { position: 'absolute', right: 0, bottom: 0, margin: 20 },
    dialog: { overflowY: 'inherit' }
}

export default class Veiculos extends Component {

    state = {
        modalAberta: false,
        dados: [ { id: 1, descricao: "Registro 1", placa: "MKT5566" } ],
        registroParaEditar: {}
    }
    colunas = [
		{ descricao: "Descrição", campo: "descricao" },
		{ descricao: "Placa", campo: "placa" },
		{ descricao: "Ações", acoes: [
				{ descricao: "Editar", icone: "pencil", funcao: this.editarRegistro },
				{ descricao: "Excluir", icone: "trash", funcao: this.excluirRegistro }
			]
		}
	]

    editarRegistro(registro) { console.log('editar', registro); }

    excluirRegistro(registro) { console.log('excluir', registro); }

    salvarRegistro(registro) { console.log('salvar', registro); }

    handlerModal() { this.setState({ modalAberta: !this.state.modalAberta }) }

    render() {
        return (
            <div>
                <Container>
                    <Card>
                        <CardTitle title="Veículos" subtitle="Configurações de veículos" />
                        <CardText>
                            <Tabela
                                linhas={ this.state.dados }
                                colunas={ this.colunas }
                            />
                        </CardText>
                    </Card>
                </Container>

                <Dialog
                    modal={ false }
                    open={ this.state.modalAberta }
                    style={ estilos.dialog }
                    >
                    <FormularioVeiculo
                        aoSalvar={ this.salvarRegistro }
                        aoCancelar={ () => this.handlerModal() }
                        dados={ this.state.registroParaEditar }
                    />
                </Dialog>

                <FloatingActionButton
                    secondary={ true }
                    style={ estilos.botaoNovoRegistro }
                    onTouchTap={ () => this.handlerModal() }
                    >
                    <IconeAdicionar />
                </FloatingActionButton>
            </div>
        )
    }

}
