import * as chai from 'chai'
import ChaiHttp = require('chai-http')

chai.use(ChaiHttp)
chai.should()

import { setup } from '../../server'

const server = setup()
const port = 9999
server.listen(port)

describe('Integration test', () => {
  it('Simple Scenario', async () => {
    let res = await chai.request(server).get('/api/posts')
    res.should.have.status(200)

    const text = 'Hello'
    res = await chai.request(server).post('/api/posts')
      .send({ text })
    res.should.have.status(200)
    res.body.text.should.equal(text)
  })
})
