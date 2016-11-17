 import React, { Component } from 'react'
 import { Table } from 'material-ui/Table'
 import Cabecalho from './Cabecalho'
 import Corpo from './Corpo'
 import './tabela.css'

 class Tabela extends Component {

 	render() {
 		let colunas = this.props.colunas;
 		let linhas = this.props.linhas;

 		return (
 			<Table
                style={ { borderColor: 'yellow' } }
				fixedHeader={ true }
				fixedFooter={ false }
				selectable={ false }
				multiSelectable={ false }
			>
                { Cabecalho(colunas) }
				{ Corpo(colunas, linhas) }
			</Table>
 		)
 	}

 }

 export default Tabela;
