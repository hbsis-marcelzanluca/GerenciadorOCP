import React from 'react';
import Select from 'react-select';
import Fetch from 'smalldots/lib/Fetch'
import 'react-select/dist/react-select.css';

const perfisSelecionados = []

const aoSelecionar = (selecionados) =>
    this.perfisSelecionados = selecionados

const transformarValores = perfis =>
    perfis.map((perfil, indice) => { return { value: perfil.id, label: perfil.descricao } })

const inputPerfis = (perfis, jaSelecionados) => {
    let valores = [jaSelecionados, ...perfisSelecionados]

    return (
        <Fetch url="">
            {({ buscando, dados, erro }) => {
                let perfis = transformarValores(dados.data)
                return (
                    <Select
                        name="perfis"
                        multi
                        value={ valores }
                        placeholder="Selecione os perfis"
                        options={ perfis }
                        onChange={ selecionados => aoSelecionar(selecionados) }
                    />
                )
            }}
        </Fetch>
    )
}

export default inputPerfis
