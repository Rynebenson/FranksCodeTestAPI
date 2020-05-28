const mongoose = require("mongoose")

const Cheeses = new mongoose.Schema({
    _id: {
        type: String
    },
    name: {
        type: String
    },
    country: {
        type: String
    },
    price: {
        type: Number
    }
})

module.exports = mongoose.model("Cheeses", Cheeses)