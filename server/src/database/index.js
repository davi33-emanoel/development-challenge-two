const dynamoose = require('dynamoose');
 dynamoose.AWS.config.update({
    region: "sa-east-1"
 });
dynamoose.local();

module.exports = dynamoose;
