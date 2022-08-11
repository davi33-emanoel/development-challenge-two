const express = require('express');
const Client = require('./models/client');
const app = express();
app.use(express.json());
const port = 5000;


app.listen(port, () =>{
    console.log("app runnig on port 5000");
})
