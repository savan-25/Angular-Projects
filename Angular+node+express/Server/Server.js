express = require('express');
const cors = require('cors');
eobj = express();

eobj.use(cors());
eobj.use(express.json());

const port = 5200;

eobj.listen(port,function(req,res)
{
    console.log("Marvellous Server get Successfuly start ");
});

eobj.get('/',getInfo);
function getInfo(req,res)
{
    res.send("Marvellous Server is On");  
}

eobj.post('/addStudent',function(req,res)
{
    const student=req.body;
    console.log('student received:',student);
    res.send(`Student ${student.name} added Succeessfully!`);
});

