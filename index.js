const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const Sequalize = require("sequelize")
const Sequalize = new Sequalize("mysql://root@localhost:3306/joga:sequelize")

Sequalize
    .authenticate()
    .then(() => {
        console.log("connect to database")
    })
    .catch(err => {
        console.error("Unable to connect to the database. ", err)
    })

app.get("/", (req, res) => {
    res.json({message: "welcone sequalize app"})
})

app.listen(3000, () => {
    console.log("Server http:/localhost:3000")
})