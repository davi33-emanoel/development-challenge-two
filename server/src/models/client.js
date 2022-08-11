const dynamoose = require('../database/index.js');
const {v4} = require('uuid');

const client = new dynamoose.Schema({
    id:{
        type: String,
        default: v4()
    },
    name: String,
    email:String,
    birthdate:String,
    address:String
});

module.exports = dynamoose.model("Client", client);