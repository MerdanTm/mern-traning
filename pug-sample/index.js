const express = require("express");

const app = express();

const port = 3010;

app.set("view engine", "pug");

app.get("/hello", (req, res) => res.send("Hello Express!!!"));

app.get("/hello", (req, res) => res.render("index"));
app.listen(port);
