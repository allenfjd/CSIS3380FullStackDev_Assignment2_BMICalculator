const express = require("express");
const bodyParser = require("body-parser");
const port= 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs"); // Set EJS as the template engine
app.set("views", __dirname +"/views"); // Set the views directory
app.use(express.static("public"));

app.get ( "/" , (req,res) => {
    // res.sendFile(__dirname+ "/bmi.html");
    res.render("BMIwithAnswer", { bmi: null }); // Pass `bmi` as null initially
});

app.post( "/" , (req,res) => {
    console.log(req.body)
    const weightKG = req.body.weightKG;
    const heightCM = req.body.heightCM;
    let heightMeterSquared= Math.pow( (heightCM/100) ,2);
    let bmi = (weightKG/heightMeterSquared).toFixed(1);
    // res.send(`Hello ${req.body.name}`);
    // res.send(`Your password is : ${req.body.name}`);
    res.render("BMIwithAnswer", { bmi: bmi}); // Render the 'userinfo' template and pass the data
});

app.listen(port,() => {
    console.log(`the Express server is running on port: ${port}`);
});