const express = require("express")
const app = express()
const config = require("./config")
const mongoose = require("mongoose")
const { ApolloServer, gql } = require("apollo-server-express")

const Cheeses = require("./models/cheeses")
const Specials = require("./models/specials")

mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Connected to database..."))

const typeDefs = gql`
    type Cheese {
        _id: ID
        name: String
        country: String
        price: String
    }

    type Special {
        _id: ID
        cheese: Cheese
        zip: String
        percent_discount: Float
        out_of_stock: Boolean
    }

    type Query {
        specials(filter: String): [Special],
        search(filter: String): [Special]
    }
`;

const resolvers = {
    Query: {
        specials: async (parent, args, context) => {
            let { filter } = args;
    
            let response = await Specials.aggregate([
                {
                    $lookup: {
                        from: 'cheeses',
                        localField: 'cheese_id',
                        foreignField: '_id',
                        as: 'cheese'
                    }
                },
                {
                    $unwind: '$cheese'
                },
                {
                    $match: {
                        zip: filter
                    }
                }
            ])
    
            return response;
        },
        search: async (parent, args, context) => {
            let { filter } = args,
                { zip } = context;

            console.log(filter, zip)
        }
    }
}

require("./routes")(app, config)

const server = new ApolloServer({ typeDefs, resolvers })

server.applyMiddleware({ app })

app.listen(process.env.PORT || 3001, () => console.log("Server running..."))