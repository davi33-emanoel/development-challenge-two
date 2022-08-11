const express = require('express');
const clientRouter = require('./routers/clients')
const app = express();
app.use(express.json());
app.use(clientRouter);
const port = 5000;


app.listen(port, () =>{
    console.log("app runnig on port 5000");
})
