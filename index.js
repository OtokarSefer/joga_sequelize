const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("joga", "root", "Mybr41n", {
    host: "localhost",
    dialect: "mysql",
});

sequelize
    .authenticate()
    .then(() => {
        console.log("Connected to database");
    })
    .catch((err) => {
        console.error("Unable to connect to the database.", err);
    });

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Sequelize app" });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
