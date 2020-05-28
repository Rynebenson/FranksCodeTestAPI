const mongoose = require("mongoose")

const Specials = new mongoose.Schema({
    cheese_id: {
        type: String
    },
    zip: {
        type: String
    },
    percent_discount: {
        type: Number
    },
    out_of_stock: {
        type: Boolean
    }
})

module.exports = mongoose.model("Specials", Specials)