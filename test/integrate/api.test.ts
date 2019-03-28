/* eslint-env jest */

import request from 'supertest'
import { setup } from '../../server'

const server = setup()

describe('Integration test', () => {
  it('Simple Scenario', async () => {
    let res = await request(server).get('/api/posts')
    expect(res.status).toBe(200)

    const text = 'Hello'
    res = await request(server)
      .post('/api/posts')
      .send({ text })
    expect(res.status).toBe(200)
    expect(res.body.text).toBe(text)
  })
})
