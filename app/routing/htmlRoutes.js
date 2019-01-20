var path = require("path");

module.exports = function(app) {

app.get("/survey",function(req,res){

    res.sendFile(path.join(_dirname,"../public/survey.html"));
});

// if there is no friend match then go to home page
app.get("*",function(req,res){
    res.sendFile(path.join(_dirname,"../public.home.html"));
});

}