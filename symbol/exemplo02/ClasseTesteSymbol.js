// DECLARAÇÃO DE SYMBOLS
const kRetornaValor = Symbol('kImprimeValor')
const kValorPrivado = Symbol('kValorPrivado')

class ClasseTesteSymbol {
  constructor(valorPrivado) {
    this[kValorPrivado] = valorPrivado
  }

  [kRetornaValor]() {
    return this[kValorPrivado].toUpperCase()
  }
}

module.exports = ClasseTesteSymbol