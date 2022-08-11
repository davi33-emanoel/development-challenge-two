const dynamoose = require('dynamoose');
const dotenv = require('dotenv');

dotenv.config();
 dynamoose.aws.sdk.config.update({
    region: "sa-east-1",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY
 });

module.exports = dynamoose;
