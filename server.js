var express = require('express');
var app = express();

app.get("/",function(req,res){
    var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    var uagent = req.headers['user-agent'];
   var lang =  req.headers['accept-language'];
  
   
   res.json({"ip":ip,"uagent":uagent,"lang":lang});
    
})

app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port 8080!')
})
