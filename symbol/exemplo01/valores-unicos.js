const assert = require('assert')

// chaves unicas
const uniqueKey = Symbol('name')
const user = {}

user["name"] = "valor para atributo normal do objeto"
user[uniqueKey] = "valor para atributo com Symbol (unico)"

// Retorna o valor normalmente
console.log("Valor do atributo normal:", user.name)

// Metadado - Não é tão fácil retornar (único em nível de endereço de memória)
console.log("Valor do atributo com o Symbol:", user[Symbol["name"]])

// Apenas passando a referência do Symbol
console.log("Valor do Symbol retornado:", user[uniqueKey])