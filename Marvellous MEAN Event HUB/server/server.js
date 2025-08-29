const express = require('express');
const bodyParser =  require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const api = require('./routes/api');//route file

const port = 3000;

const app = express(); //first initialize app

app.use(cors());
app.use(express.static(path.join(__dirname,'dist')));
app.use(bodyParser.json()); 
app.use(express.json()); 

mongoose.connect("mongodb://localhost:27017/Eventdb",
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }
);

//Register route
app.use('/api',api)

app.listen(port,function(){
    console.log('Marvellous infosystem server running on localhost'+port);
    
})