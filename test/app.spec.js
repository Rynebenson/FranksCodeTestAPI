const supertest = require("supertest")
const app = require("../index")

describe("GET /", () => {
    it("Render Welcome Message", () => {
        supertest(app)
            .get("/")
            .expect(200)
    })
})