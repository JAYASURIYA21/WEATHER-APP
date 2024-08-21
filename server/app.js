const express = require("express");
const bodyparser = require("body-parser");
const https = require("https");

var app = express();
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    var des;
    const url = "https://api.openweathermap.org/data/2.5/weather?q=madurai&appid=6fda465b3be405dbf9dbb0460986eb69&units=metric";
    https.get(url, response => {
        console.log(response.statusCode);
        response.on("data",data => {
            const weather_data = JSON.parse(data);
            const temp = weather_data.main.temp;
            des = weather_data.weather[0].description;
            console.log(temp+" " +des);
            res.send(des + " temperature is " + temp);
        });
    });
    
});

app.post("/", function (req, res) {
    var result = Number(req.body.num1) + Number(req.body.num2);
    res.send("The result is " + result);
});

app.listen(3000, function () {
    console.log("Server is running at port 3000");
});
