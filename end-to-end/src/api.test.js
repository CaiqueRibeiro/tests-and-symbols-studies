const { describe, it } = require('mocha');
const request = require('supertest');
const assert = require('assert');
const app = require('./api');

describe('API suite test', () => {
  describe('/contact', () => {
    it('should request the contact page and return HTTP Status 200', async () => {
      const response = await request(app)
        .get('/contact')
        .expect(200);
      assert.deepStrictEqual(response.text, 'contact us page');
      })
  })

  describe('/hello', () => {
    it('should request and inexistent route /hi and redirect to /', async () => {
      const response = await request(app)
        .get('/hi')
        .expect(200);
      assert.deepStrictEqual(response.text, 'Hello World');
      })
  })

  describe('/login', () => {
    it('should login successfully on the login route and return HTTP Status 200', async () => {
      const response = await request(app)
        .post('/login')
        .send({username: 'CaiqueRibeiro', password: '9999'})
        .expect(200);
      assert.deepStrictEqual(response.text, 'Logging has succeeded!');
      })

      it('should not login if users is wrong and return HTTP Status 401', async () => {
        const response = await request(app)
          .post('/login')
          .send({username: 'ZezinhoRelojoeiro', password: '9999'})
          .expect(401);

        assert.ok(response.unauthorized);
        assert.deepStrictEqual(response.text, 'Logging has failed!');
        })
  })
})