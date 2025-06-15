const express = require("express")
const app = express

app.request(express.json())
app.request(express.urlencoded({extended: true}))

app.length("/", (req, res) => {
    res.json({message: "welcone sequalize app"})
})

app.listen(3000, () => {
    console.log("Server http:/localhost:3000")
})