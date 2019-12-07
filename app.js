const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); // to serve public folder which contains css files
app.set("view engine", "ejs"); // all templates are ejs

let bikes = ["Emonda", "Madone", "Dogma", "TCR"];

app.get("/", function(req,res) {
    res.render("home");
}); 

app.post("/addbike", function(req,res) {
    let newBike = req.body.newbike;
    bikes.push(newBike);
    res.redirect("/bikes");
});

app.get("/bikes", function(req,res) {
    res.render("bikes", {bikes: bikes});
});

// app.listen(process.env.PORT, function() {
//     console.log("Server started " + process.env.PORT + process.env.IP);
// });

app.listen(3000, () => {
	console.log("Server started on port 3000");
});