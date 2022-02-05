const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
})) // the code you need to write everytime you use body parser
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  console.log(req.body);
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;
  res.send("The result of the calculation is " + result);
});

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(req, res) {
  console.log(req.body);
  var weight = parseFloat(req.body.weight); // passes a decimal number
  var height = parseFloat(req.body.height);

  res.send(bmiCalculator(weight, height));
})

app.listen(3000, function() {
  console.log("server is ready");
});

function bmiCalculator(weight, height) {
  var bmi = Math.round(weight / (height * height));
  if (bmi < 18.5) {
    var interpretation = "Your BMI is " + bmi + ", so you are underweight.";
  }
  if (bmi >= 18.5 && bmi <= 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you have a normal weight."
  }
  if (bmi > 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you are overweight."
  }
  return interpretation;
}
