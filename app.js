const express = require("express"),
    app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req,res) => {
	res.render("./index", {});
});

app.listen(process.env.PORT, function(){
	console.log("Portfolio has started...");
    console.log("Let me know what you think!")
});