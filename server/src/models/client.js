const dynamoose = require('../database/index.js');
const {v4} = require('uuid');

const client = new dynamoose.Schema({
    id: {
        type: String,
        hashKey: true,
        default: v4(),
    },
    name: {
        type: String
    },
    email:{
        type: String
    },
    birthdate:{
        type: Date
    },
    address:{
        type: String
    },
    timestamps: true
});

module.exports = dynamoose.model("Client", client);