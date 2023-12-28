//DEPENDENCIES
require("dotenv").config()
const express = require("express")
const app = express()

const morgan = require("morgan")
const PORT = process.env.PORT || 3013

//DATABASE
const mongoose = require("mongoose")
const db = mongoose.connection;
mongoose.connect(process.env.DATABASE_URL)

db.on("connected", () => console.log("mongo connected"))
db.on("error", (err) => console.log(err.message + `something went wrong with mongo`))
db.on("closed", () => console.log("mongo disconnected"))

//MIDDLEWARE
app.use(morgan("dev"))
app.use(express.urlencoded({extended:true}))


//ROUTES


//SERVER LISTENING
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
