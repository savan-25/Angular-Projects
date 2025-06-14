express = require('express');

eobj = express();
port = 5100;

eobj.listen(port,function(req,res)
{
    console.log("Marvellous Server Started...");
})
// Handling cors Origin Resource sharing
// Use Cores in Middelware
const cors = require("cors");
eobj.use(cors());


// this is default Route when Client Wants to Connect to Server
eobj.get('/',function(req,res){
    res.send("Marvellous Server is ON");
})
eobj.get('/getBatches',MarvellousGetBatches);
function MarvellousGetBatches(req,res)
{
    res.json({"batch":"PPA","FEES":21000});
}
