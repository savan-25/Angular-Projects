express = require('express');
eobj = express();
port = 5100;

eobj.listen(port, function(req,res){
  console.log("Marvellous Server is started succesfully");
});

//Handling cors Cross Origine Resource sharing
eobj.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin",
  "http://localhost:4200");

  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-with, Content-Type, Accept");

  next();
});

eobj.get('/',MarvellousGet);

function MarvellousGet(req,res)
{
  res.send("Marvellous Server is ON");
}

eobj.get('/getBatches',MarvellousGetBatches);

function MarvellousGetBatches(req,res)
{
  res.json({"batch":"PPA", "Fees": 21000, "Duration" : "3 months"});
}