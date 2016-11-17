import React from 'react'
import { TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table'

const cabecalho = (dadosCabecalho) => (
	<TableHeader displaySelectAll={ false } adjustForCheckbox={ false }>
		<TableRow key={ 1 }>{
			dadosCabecalho.map((dado, indice) => {
				return (<TableHeaderColumn key={ indice }>{ dado.descricao }</TableHeaderColumn>);
			})
		}</TableRow>
	</TableHeader>
);

export default cabecalho
