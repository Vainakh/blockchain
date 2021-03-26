const express = require('express');
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');

const bidcoin = new Blockchain();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))

app.get('/blockchain', (req, res) => {
  res.send(bidcoin);
});

app.post('/transaction', (req, res) => {
  console.log(req.body);
  res.send(`The amount of the transaction is ${req.body.amount} bidcoins.`)
});

app.get('/mine', (req, res) => {
  
});

app.listen(3000, () => {
  console.log('Server is up and running on port 3000...')
});
