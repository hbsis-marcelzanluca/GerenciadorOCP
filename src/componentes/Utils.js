/**
 * Funções HELPER
 * Não prostitua este arquivo, tenha conciência
 */

export const obterTipo = objeto => ({}).toString.call(objeto).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
