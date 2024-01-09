const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const Producer = require('./producer');
const producer = new Producer();

app.use(bodyParser.json('application/json'));

app.post('/sendLog', async(req, res) => {
    await producer.publishMessage(req.body.logType, req.body.message);
    res.send();
})

app.listen(3000, () => {
    console.log('server started...')
})