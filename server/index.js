const express = require('express');
const app  = express();

app.post("/register",(req, res) => {
    res.json('test ok');
});

const port = 4000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});