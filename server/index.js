const express = require('express');
const cors = require("cors");

const app  = express();
const jwt = require('jsonwebtoken');

app.use(cors({credentials: true, origin:'http://localhost:3000'}));
app.use(express.json());


const bcrypt = require('bcryptjs');

const mongoose = require('mongoose');
const User = require('./models/User');


const saltRounds = bcrypt.genSaltSync(10);
const secret = 'n5zrfzrfzrf5abiokk75p2lkhjrd';


//mongoDB Connection
mongoose.connect('mongodb+srv://omarzouaoui100:raqiHxlTr56AkLlo@cluster0.ofzbzfd.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

//Register
app.post("/register", async (req, res) => {
    const {username, password}=req.body;
    try{
        const userDoc = await User.create({
            username,
            password:bcrypt.hashSync(password, saltRounds, (err, hash) => {
                if(err){
                  console.log(err)
                } else{
                  console.log(hash)
                }
              })
        })
        res.json(userDoc);
    } catch(error) {
      console.log(e)
        res.status(400).json(e);
    }
});

//Login
app.post('/login', async (req, res) => {
  const {username, password} = req.body;
  const userDoc = await User.findOne({username});
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if(passOk){
    //logged in
    jwt.sign({username, id:userDoc._id}, secret, {}, (err, token) => {
      if(err) throw err;
      res.cookie('token', token).json('ok');
    });
  } else {
    res.status(400).json('wrong password')
  }
})

const port = 4000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
//password mongodb : raqiHxlTr56AkLlo
//mongodb+srv://omarzouaoui100:raqiHxlTr56AkLlo@cluster0.ofzbzfd.mongodb.net/