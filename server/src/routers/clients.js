const express = require('express');
const clientRouter = express.Router();

clientRouter.get('/client', (req, res) => {
    res.send('Hello World!');
})

clientRouter.post('/client', async (req, res) => {
    const client = await Client.create(req.body);
    return res.json(client);
})

module.exports = clientRouter;