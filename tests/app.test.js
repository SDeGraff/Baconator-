import request from 'supertest'

import app from 'app.js'

describe('POST /users', () => {
    describe("when passed a username and password", () => {
        test("should respond with a 200 status code", async () => {
            const response = await request(app).post("/users").send({
                username: "username",
                password: "password"
            })

            describe("when the username or password is missing", () => {

            })
            expect(response.statusCode).toBe(200)

        })
    })
})