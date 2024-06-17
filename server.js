//jshint esversion:6

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/Calculator.html")
});

app.post("/", function(req, res){

    var first_num = Number(req.body.num1);
    var second_num = Number(req.body.num2);

    var answer = first_num + second_num;
    res.send("the result of the calculation is: " + answer);
})

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", function(req, res){

    var input_weight = Number(req.body.weight);
    var input_height = Number(req.body.height);

    var answer = input_weight / (input_height * input_height);
    res.send("Your BMI is " + answer);
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})