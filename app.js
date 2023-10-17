const express = require("express"),
    app = express(),
    axios = require('axios');

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    // axios.get('https://sems.mikeclancy.me').catch(err=>console.log(err));
    // axios.get('https://tgt.mikeclancy.me').catch(err=>console.log(err));
    // axios.get('https://bgg.mikeclancy.me').catch(err=>console.log(err));
    // axios.get('https://wdash.mikeclancy.me').catch(err=>console.log(err))
    res.render("./index", {});
});

app.listen(process.env.PORT, function () {
    console.log("Portfolio has started...");
    console.log("Let me know what you think!")
});