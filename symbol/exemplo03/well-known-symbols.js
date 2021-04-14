const obj = {
  nome: 'Caique Ribeiro Rodrigues',
  idade: 26,
  tecnologias: ['ReactJS', 'React Native', 'NodeJS', 'Clojure'],

  [Symbol.toPrimitive](coercionType) {
    return coercionType
  },
  
  [Symbol.iterator]: () => ({
      items: Object.values(obj).reverse(),
      next() {
        return {
          done: this.items.length === 0,
          value: this.items.pop()
        }
      }
  }),

  async *[Symbol.asyncIterator]() {
    const timeout = ms => new Promise(response => setTimeout(response, ms))
    for(const item of Object.values(this)) {
      await timeout(100)
      yield item
    }
  }
}

// Testando o Symbol.toPrimitive()
console.log(obj + "!!")

// Modos de iterar (depois de implementar o Symbol.iterator())
// iterator:
for(const item of obj) {
  console.log("iterator", item)
}

const valoresSeparados = [...obj]
console.log("valores separados:", valoresSeparados)

// async Iterator
;(async () => {
  for await(const item of obj) {
    console.log("Async Iterator:", item)
  }
})()