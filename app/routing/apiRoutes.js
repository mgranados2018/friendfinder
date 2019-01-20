var friendsData = require("../data/friends");


module.exports = function (app) {

    //use to display the json survey data to the user when clicking on the survey api link
    app.get("/api/survey", function (req, res) {

        res.json(friendsData);
    })


    // write for loop that will compare what the user inputs to json object

    app.post("/api/survey", function (req, res) {
        var newfriend = req.body;
        console.log(newfriend);

        var totaldifference;

        for(i=0;i<friendsData.length;i++){
                     
            var totaldifference = math.abs(friendsData.scores[i]-newfriend.scores[i])
            console.log("total difference array"+totaldifference);
       
        }

        function sort(){
            totaldifference.sort(function(a,b){return a-b})
        }


        friendsData.push(req.body)


    })


}

