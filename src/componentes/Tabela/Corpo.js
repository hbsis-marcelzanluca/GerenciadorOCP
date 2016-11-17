import React from 'react'
import { TableBody, TableRow, TableRowColumn } from 'material-ui/Table'
import IconButton from 'material-ui/IconButton'

const estilos = { botaoAcoes: { fontSize: 16 } }

const gerarAcoes = (coluna, indiceColuna, registro) => {
	return (
		<TableRowColumn key={ indiceColuna } className="acoes-tabela-coluna">{
			coluna.acoes.map((acao, indiceAcao) => {
				if (!typeof acao.funcao === 'function') return null

				return <IconButton
					key={ indiceAcao }
					onClick={ acao.funcao.bind(this, registro) }
					iconStyle={ estilos.botaoAcoes }
					iconClassName={ `fa fa-${acao.icone}` }
					tooltip={ acao.descricao }
					tooltipPosition="top-center"
				/>
			})
		}</TableRowColumn>
	)
}

const gerarLinhasTabela = (linhas, colunas) => {
	return linhas.map((linha, indiceLinha) => {
		return(
			<TableRow key={ indiceLinha }>{
				colunas.map((coluna, indiceColuna) => {
					if (coluna.acoes)
						return gerarAcoes(coluna, indiceColuna, linha);

					return (<TableRowColumn key={ indiceColuna }>{ linha[coluna.campo] }</TableRowColumn>);
				})
			}</TableRow>
		)
	})
}

const corpo = (colunas, dados) => (
	<TableBody showRowHover={ true } displayRowCheckbox={ false }>{	gerarLinhasTabela(dados, colunas) }</TableBody>
)

export default corpo
