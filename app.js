const express = require("express");
const dotenv = require('dotenv');
const app = express();
const axios = require('axios');

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
dotenv.config();
const iconLink = process.env.ICONS

app.get("/", (req, res) => {
    axios.get('https://repsearch.clancymike.com').catch(err => console.log(err));
    axios.get('https://weatherdashboard.clancymike.com').catch(err => console.log(err));
    axios.get('https://bgg.clancymike.com').catch(err => console.log(err));
    axios.get('https://wdash.clancymike.com').catch(err => console.log(err))
    res.render("index", { iconLink: iconLink });
});

app.listen(process.env.PORT, function () {
    console.log("Portfolio has started...");
    console.log("Let me know what you think!")
});