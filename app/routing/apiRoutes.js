var surveyData = require("../data/friends");


module.exports = function (app) {

    //use to display the json survey data to the user 
app.get("/api/survey", function (req, res) {
    res.json(surveyData);
})


// write for loop that will compare what the user inputs to json object

app.post("api/survey",function(req,res){
    var userdata = req.body;



})


}

