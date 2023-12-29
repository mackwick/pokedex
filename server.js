//DEPENDENCIES
const express = require("express")
const app = express()
const Pokemon = require("./models/pokemon.js")
const morgan = require("morgan")
const methodOverride = require("method-override")

//MIDDLEWARE
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(morgan("dev"))
app.use(methodOverride("_method"))

//ROUTES
//Index
app.get("/pokemon", (req, res) => {
    res.render("index.ejs", {Pokemon})
})

//New
app.get("/pokemon/new", (req, res) => {
    res.render("new.ejs")
})

//Delete
app.delete("/pokemon/:id", (req, res) => {
    const id = req.params.id
    Pokemon.splice(id, 1)
    res.redirect("/pokemon")
})

//Update
app.put("/pokemon/:id", (req, res) => {
    const id = req.params.id
    const body = req.body
    // res.send(body)
    Pokemon[id] = body
    res.redirect("/pokemon")
})

//Create
app.post("/pokemon", (req, res) => {
    const body = req.body
    Pokemon.push(body)
    res.redirect("/pokemon")
})

//Edit
app.get("/pokemon/:id/edit", (req, res) => {
    const id = req.params.id
    const editPokemon = Pokemon[id]
    res.render("edit.ejs", {editPokemon, id})
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
