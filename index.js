const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const urlRouter = require("./controllers/url");
const redirectRouter = require("./controllers/redirect");

const port = process.env.PORT || 5000;
const app = express();

const db = process.env.CONNECTION_STRING;

function startDatabase() {
    mongoose.connect(db, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("MongoDB database connection established successfully");
    });
}

function initRouters() {
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");
        res.header("Access-Control-Allow-Methods", "*");
        next();
    });
    app.use(cors());
    app.use(express.json());
    app.use("/url", urlRouter);
    app.use("/", redirectRouter);
}

function startServer() {
    app.listen(port, () => console.log(`Running on port ${port}...`));
    startDatabase();
    initRouters();
}

startServer();
