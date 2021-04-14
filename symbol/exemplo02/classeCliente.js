const ClasseTesteSymbol = require('./ClasseTesteSymbol')
const assert = require('assert')

const classeTeste = new ClasseTesteSymbol('VALOR QUE SERÁ PRIVADO')

// Como a instância é retornada
console.log(classeTeste)

// Dará Erro
assert.deepStrictEqual(classeTeste.kValorPrivado, 'VALOR QUE SERÁ PRIVADO')

const valor = classeTeste.kRetornaValor()