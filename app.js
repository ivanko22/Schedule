const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/views"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./routes")(app);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

