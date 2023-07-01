const express = require('express');
const cors = require("cors");

const app  = express();
const multer  = require('multer');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const fs = require('fs');

app.use(cors({credentials: true, origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());


const uploadMiddleware = multer({ dest: 'uploads/' });
const bcrypt = require('bcryptjs');

const mongoose = require('mongoose');
const User = require('./models/User');
const Post = require('./models/Post');


const saltRounds = bcrypt.genSaltSync(10);
const secret = 'n5zrfzrfzrf5abiokk75p2lkhjrd';


//mongoDB Connection
mongoose.connect("mongodb+srv://omarzouaoui100:raqiHxlTr56AkLlo@cluster0.ofzbzfd.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true })
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
      res.cookie('token', token).json({
        id: userDoc._id,
        username,
      });
    });
  } else {
    res.status(400).json('wrong password')
  }
})

//checking if logged in
app.get('/profile', (req, res) => {
  const {token} = req.cookies;
  jwt.verify(token, secret, {},(err, info) => {
    if(err) throw err;
    res.json(info);
  });
});

//Logout
app.post('/logout', (req, res) => {
  res.cookie('token', '').json('ok');
})

//Create post
app.post('/post', uploadMiddleware.single('file'), async (req, res) => {
  const {originalname, path} = req.file;
  const parts = originalname.split('.');
  const ext = parts[parts.length - 1];
  const newPath = path + '.' + ext;
  fs.renameSync(path, newPath);

  const {token} = req.cookies;
  jwt.verify(token, secret, {}, async(err, info) => {
    if(err) throw err;
    const {title, summary, content} = req.body;
    const postDoc = await Post.create({
      title,
      summary,
      content,
      cover: newPath,
      author: info.id,
    });
    res.json(postDoc);
  });    
});


//Get posts 
app.get('/post', async (req, res) => {
  const posts = await Post.find().populate('author', ['username']);
  res.json(posts);
})


const port = 4000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
//password mongodb : raqiHxlTr56AkLlo
//mongodb+srv://omarzouaoui100:raqiHxlTr56AkLlo@cluster0.ofzbzfd.mongodb.net/