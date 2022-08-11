const express = require('express');
const Client = require('../models/client');
const clientRouter = express.Router();

clientRouter.get('/client', async (req, res) => {
    const client = await Client.scan().exec();
    return res.json({client});
})

clientRouter.post('/client', async (req, res) => {
    const client = await Client.create(req.body);
    return res.json(client);
})

clientRouter.put('/client/:id', async (req, res) => {
    const client = await Client.update(req.params.id,req.body);
    return res.json(client);
})

clientRouter.delete('/client/:id', async (req, res) => {
    await Client.delete(req.params.id);
    return res.json({msg: `Cliente ${req.params.id} deletado`});
})

module.exports = clientRouter;