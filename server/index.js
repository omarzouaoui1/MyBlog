const express = require('express');
const cors = require("cors");
const app  = express();

app.use(cors());
app.use(express.json());

app.post("/register",(req, res) => {
    const {username, password}=req.body;
    res.json({requestData:{username, password}});

});

const port = 4000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
//password mongodb : raqiHxlTr56AkLlo
//mongodb+srv://omarzouaoui100:raqiHxlTr56AkLlo@cluster0.ofzbzfd.mongodb.net/