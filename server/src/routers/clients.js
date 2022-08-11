const express = require('express');
const Client = require('../models/client');
const clientRouter = express.Router();

clientRouter.get('/client', (req, res) => {
    res.send('Hello World!');
})

clientRouter.post('/client', async (req, res) => {
    const client = await Client.create(req.body);
    return res.json(client);
})

clientRouter.put('/client/:id', async (req, res) => {
    
    return ;
})

clientRouter.delete('/client/:id', async (req, res) => {

    return ;
})

module.exports = clientRouter;