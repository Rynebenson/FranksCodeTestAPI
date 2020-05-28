const csv = require("csvtojson")
const mongoose = require("mongoose")
const Cheeses = require("./models/cheeses")
const Specials = require("./models/specials")

module.exports = function(app, config) {

    // Welcome message
    app.get("/", (req, res) => {
        res.send("Welcome to CodeTest API")
    });

    /**
     * Convert data from CSV to MongoDB
     */
    app.get("/convert_csv", async (req, res) => {
        await csv().fromFile("./cheeses.csv")
        .then(async data => {
            for(var i = 0; i < data.length; i++) {
                let cheese = new Cheeses({
                    _id: data[i].id,
                    name: data[i].name,
                    country: data[i].country,
                    price: data[i].price
                })

                await cheese.save()
                console.log(`Cheese saved - ${i}/${data.length}`)
            }
        })

        await csv().fromFile("./specials.csv")
        .then(async data => {
            for(var i = 0; i < data.length; i++) {
                let special = new Specials({
                    cheese_id: data[i].cheese_id,
                    zip: data[i].zip,
                    percent_discount: data[i].percent_discount,
                    out_of_stock: data[i].out_of_stock === "True" ? true : false 
                })

                await special.save()
                console.log(`Special saved - ${i}/${data.length}`)
            }
        })
    });
}