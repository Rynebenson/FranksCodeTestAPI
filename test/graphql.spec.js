const request = require("supertest")
const chai = require("chai")

const expect = chai.expect
const should = chai.should()

describe('GraphQL', () => {
    it('Fetch Specials In Service Area', done => {
        request("http://localhost:3001/graphql")
            .post('/graphql')
            .send({ query: '{ specials(filter:"91001") { _id cheese { _id name country price } zip percent_discount out_of_stock  } }' })
            .expect(200)
            .end((err, res) => {
                if(err) return done(err)

                res.body.data.specials[0].should.have.property('_id')
                res.body.data.specials[0].should.have.property('cheese')
                res.body.data.specials[0].should.have.property('zip')
                res.body.data.specials[0].should.have.property('percent_discount')
                res.body.data.specials[0].should.have.property('out_of_stock')
                done()
            })
    })

    it('Fetch Specials By Filtering Country and Zip', done => {
        request("http://localhost:3001/graphql")
            .post('/graphql')
            .send({ query: '{ specials(filter: "italy", zip:"91001") { _id cheese { _id name country price } zip percent_discount out_of_stock  } }' })
            .expect(200)
            .end((err, res) => {
                if(err) return done(err)

                res.body.data.specials[0].should.have.property('_id')
                res.body.data.specials[0].should.have.property('cheese')
                res.body.data.specials[0].should.have.property('zip')
                res.body.data.specials[0].should.have.property('percent_discount')
                res.body.data.specials[0].should.have.property('out_of_stock')
                done()
            })
    })

    it('Fetch Specials By Filtering Name and Zip', done => {
        request("http://localhost:3001/graphql")
            .post('/graphql')
            .send({ query: '{ specials(filter: "fontina", zip:"91001") { _id cheese { _id name country price } zip percent_discount out_of_stock  } }' })
            .expect(200)
            .end((err, res) => {
                if(err) return done(err)

                res.body.data.specials[0].should.have.property('_id')
                res.body.data.specials[0].should.have.property('cheese')
                res.body.data.specials[0].should.have.property('zip')
                res.body.data.specials[0].should.have.property('percent_discount')
                res.body.data.specials[0].should.have.property('out_of_stock')
                done()
            })
    })
})