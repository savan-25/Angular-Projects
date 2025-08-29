const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const jwt = require('jsonwebtoken')
const SECRETE_KEY = "savan25";
const Signup = require('../models/registration');
const { log } = require('@angular-devkit/build-angular/src/builders/ssr-dev-server');
/*
mongoose.connect(db, function(err){
    if(err){
        console.error('Error! ' + err)
    } else {
      console.log('Connected to mongodb')      
    }
});
*/

function verifyToken(req, res, next) 
{
  if(!req.headers.authorization) 
  {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') 
  {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) 
  {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}

router.get('/events', (req,res) => {
  let events = [
    {
      "_id": "1",
      "name": "Angular: Web Development",
      "description": "2 Days",
      "Teacher": "Piyush Manohar Khairnar"
    },
    {
      "_id": "2",
      "name": "Python: Machine Learning",
      "description": "2 Days",
      "Teacher": "Piyush Manohar Khairnar"
    },
    {
      "_id": "3",
      "name": "Machine Learning",
      "description": "2 Days",
      "Teacher": "Piyush Manohar Khairnar"
    },
    {
      "_id": "4",
      "name": "GoLang",
      "description": "2 Days",
      "Teacher": "Piyush Manohar Khairnar"
    },
    {
      "_id": "5",
      "name": "IPhone Programming",
      "description": "2 Days",
      "Teacher": "Piyush Manohar Khairnar"
    },
    {
      "_id": "6",
      "name": "Android Programming",
      "description": "2 Days",
      "Teacher": "Piyush Manohar Khairnar"
    }
  ]
  res.json(events)
})

router.get('/special', verifyToken, (req, res) => {
  let specialEvents = [
    {
      "_id": "1",
      "name": "IOT",
      "description": "3 Days",
      "Teacher": "Piyush Manohar Khairnar"
    },
    {
      "_id": "2",
      "name": "IOS Internals",
      "description": "3 Days",
      "Teacher": "Piyush Manohar Khairnar"
    },
    {
      "_id": "3",
      "name": "LSP",
      "description": "3 Days",
      "Teacher": "Piyush Manohar Khairnar"
    },
    {
      "_id": "4",
      "name": "Struts",
      "description": "3 Days",
      "Teacher": "Piyush Manohar Khairnar"
    },
    {
      "_id": "5",
      "name": "Embedded Programming",
      "description": "3 Days",
      "Teacher": "Piyush Manohar Khairnar"
    },
    {
      "_id": "6",
      "name": "IOT Workshop",
      "description": "3 Days",
      "Teacher": "Piyush Manohar Khairnar"
    }
  ]
  res.json(specialEvents)
})

router.post('/login', async(req, res) => {
    // let userData = req.body
    
    // if ((userData.email == "Marvellous123") && (userData.password == "Marvellous123")) 
    // {
    //   let payload = {subject: 1}
    //   let token = jwt.sign(payload, 'secretKey')
    //   res.status(200).send({token})   
    // } 
    // else 
    // {
    //     res.status(401).send('Invalid Password')
    // } 
    const {email,password} = req.body;
    const user = await User.findOne(({ email }));

    if(!user || user.password !=password)
    {
      return res.status(401).json({ message:'Invalid Credentials'});
    }

    const token = jwt.sign({userId:user._id,email:user.email,role:user.role},SECRETE_KEY,{expiresIn:'1h'});

    res.json({
      role : user.role,
      message:"Login Successful"
    })
})
router.post('/signup',async(req,res)=>
{
   console.log('Recived signup data',req,body);

   const { name,email,phone,pass} = req.body;

   try{
    const existingUser = await User.find({ email });

    if(existingUser)
    {
     return res.status(4000).json({ message: 'user already exists'});
    }
    const user = new user({ name,email,phone,pass });
    await user.save();
     }catch(err)
   {
     console.error('signup error',err.message);
     res.status(400).send(err.message);
   }
   
});

module.exports = router;