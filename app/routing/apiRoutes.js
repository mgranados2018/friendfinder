var friendsData = require("../data/friends");


module.exports = function (app) {

    //use to display the json survey data to the user when clicking on the survey api link
app.get("/api/survey", function (req, res) {
    res.json(friendsData);
})


// write for loop that will compare what the user inputs to json object

// app.post("api/friends", function(req,res){
//     var userdata = req.body;



// })


}

