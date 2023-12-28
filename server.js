//DEPENDENCIES
require("dotenv").config()
const express = require("express")
const app = express()
const Pokemon = require("./models/pokemon.js")


//MIDDLEWARE
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))


//ROUTES
//Index
app.get("/pokemon", (req, res) => {
    res.send(Pokemon)
})


//SERVER LISTENING
app.listen(3000, () => {
    console.log(`Listening on port 3000`)
})
