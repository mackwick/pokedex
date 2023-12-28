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
    res.render("index.ejs", {Pokemon})
})



//Show
app.get("/pokemon/:id", (req, res) => {
    const id = req.params.id
    const showPokemon = Pokemon[id]
    res.render("show.ejs", {showPokemon})
})


//SERVER LISTENING
app.listen(3000, () => {
    console.log(`Listening on port 3000`)
})
