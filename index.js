const express = require("express")
const app = express()
const config = require("./config")
const mongoose = require("mongoose")

mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Connected to database..."))

require("./routes")(app, config)

app.listen(process.env.PORT || 3001, () => console.log("Server running..."))