const { response } = require("express");

const { request } = require("express");

const express = require("express");
const bodyParser = require('body-parser');

const req = require("express/lib/request");
const { json } = require("express/lib/response");

const app = express();
const https = require("https");

app.use(bodyParser.urlencoded({extended:false}))

app.get("/", function(req,res){

app.use(express.static('public'));
res.sendFile(__dirname +"/index.html")


 });

app.post("/", function(req, res){
  
    
    const query = req.body.City_name;
    




const url =" https://api.openweathermap.org/data/2.5/weather?q= " +query + "&units=metric&appid=f1486ce229a414c1a46b0a7cfca880d6";

https.get(url, function (response) {
//    console.log(response.statusCode); 

response.on("data", function(data){
    
    const weatherData = JSON.parse(data);
    // console.log(weatherData);
    
   const Temp = weatherData.main.temp;
   const description = weatherData.weather[0].description;


    // console.log(Temp);
    // console.log(description);

const icon = weatherData.weather[0].icon;
const iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

    res.write("<h1 > The temperature in " + query + " is "  + Temp  + " degree celcius  </h1>")
    res.write("<h3> The wheather is  " + description + "</h3> "  );
    res.write("<img src= "+iconUrl + "  >"); 
    
    res.send();


  
});

});


});




app.listen("3000", function(){
    console.log("port running on 3000");
});





























































