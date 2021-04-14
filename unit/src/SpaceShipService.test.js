const { describe, it, before, beforeEach, afterEach } = require('mocha')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon')
const SpaceShipService = require('./SpaceShipService');

chai.use(chaiAsPromised);
const expect = chai.expect;

const BASE_URL_1 = "https://swapi.dev/api/starships/2/";
const BASE_URL_2 = "https://swapi.dev/api/starships/9/";
const INVALID_URL = "https://swapi.dev/s"

const mocks = {
  deathStar: require('../test/mocks/death-star.json'),
  corvette: require('../test/mocks/cr90-corvette.json')
};

describe('SpaceShipService tests', () => {
  let spaceShipDatabase = {}
  let spaceShipService = {}

  let sandbox = {}

  before(() => {
    spaceShipService = new SpaceShipService()
  })

  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('should return and error when url is not passed to service', async () => {
    const result = spaceShipService.makeRequest()

    await expect(result).to.be.rejectedWith(Error, 'URL vazia!')
  })

  it('should return reject when invalid URL', async () => {
    sandbox.stub(
      spaceShipService,
      spaceShipService.makeRequest.name
    )
    .withArgs(INVALID_URL)
    .rejects(new Error('Dados não encontrados'))

    const result = spaceShipService.makeRequest(INVALID_URL)

    await expect(result).to.be.rejectedWith(Error, 'Dados não encontrados')
  })

  it('should get name, model and passengers of a spaceship, given the url', async () => {
    sandbox.stub(
      spaceShipService,
      spaceShipService.makeRequest.name
    ).withArgs(BASE_URL_1)
      .resolves(mocks.corvette)

    const result = await spaceShipService.getSpaceship(BASE_URL_1)

    const expected = {
      nome: 'CR90 corvette',
      modelo: 'CR90 corvette',
      passageiros: '600'
    }

    expect(result).to.be.deep.equal(expected)
  })
})


