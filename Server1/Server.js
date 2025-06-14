 // This is My First Server Side Code
 // Jay Hanuman 

 // require -loades to outside thing to include in our program
 express = require("express");

// After Loading express for it uses we need to Create Object of it
 eobj = express();

 port= 5100;

//this method is called Automatically When Any one Start The Server
function MarvellousWelcomeMessage()
{
    console.log("Marvellous Server is On At Port 5100...");
}
//listen method asks for two parameter (port no,any message)
eobj.listen(port,MarvellousWelcomeMessage)

function MarvellousAcceptRequest(req , res)
{
    res.send("Marvellous Server Connection is Succesfull");
}

eobj.get('/',MarvellousAcceptRequest);

function MarvellousBatches(req, res)
{
    res.send("We Have PPA, LB, Angular");
}

eobj.get('/batches',MarvellousBatches);

function MarvellousLocation(req , res)
{
    res.send("Location of Marvellous Is Kothrud Pune");
}

eobj.get('/location',MarvellousLocation);

function MarvellousBatchDetails(req,res)
{
    res.json({"Batch" : "PPA", "Fess" : 21000, "Duration" : "3 Months"});
}

eobj.get('/Getbatchdetails', MarvellousBatchDetails);
