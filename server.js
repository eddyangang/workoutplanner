const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

const app = express();
const PORT = process.env.PORT || 8080;
const databaseUrl = "exercise";
const collections = ["planner"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
    console.log("Database Error:", error);
});

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get("/all", (req, res) => {
    db.animals.find({}, (err, found) => {
        if (err) {
            console.log(err);
        } else {
            res.json(found);
        }
    });
});

app.get("/name", (req, res) => {
    db.animals.find().sort({
        name: 1
    }, (err, found) => {
        if (err) {
            console.log(err);
        } else {
            res.json(found);
        }
    });
});

app.get("/weight", (req, res) => {
    db.animals.find().sort({
        weight: -1
    }, (err, found) => {
        if (err) {
            console.log(err);
        } else {
            res.json(found);
        }
    });
});

app.listen(PORT, () => {
    console.log("App running on port http://localhost:" + PORT);
});