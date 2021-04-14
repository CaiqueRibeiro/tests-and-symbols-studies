const https = require('https');

class SpaceShipService {
  constructor() {
  }

  async makeRequest(url) {
    if(!url || url === '') {
      throw new Error('URL vazia!');
    }

    return new Promise((resolve, reject) => {
      https.get(url, response => {
        response.on("data", data => resolve(JSON.parse(data)))
        response.on("error", reject(new Error('Dados não encontrados')))
      })
    })
  }

  async getSpaceship(url) {
    const result = await this.makeRequest(url)
    return {
      nome: result.name,
      modelo: result.model,
      passageiros: result.passengers
    }
  }
}

module.exports = SpaceShipService