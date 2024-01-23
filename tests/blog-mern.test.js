import app from '../app';
import request from 'express';

describe("POST /auth/login", () => {
  describe("given a username and password", () => {
    test('should respond with a 200 status code', async() => {
      const response = await request(app).post('/auth/login').send({
        username: "username",
        password: "password"
      })
      expect(response.statusCode).toBe(200)
    })
  })

  describe("when the username and password is missing", () => {
    
  })
})