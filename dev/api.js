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
  const blockIndex = bidcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
  res.json({ note: `Transaction will be added in block ${blockIndex}.`})
});

app.get('/mine', (req, res) => {
  
});

app.listen(3000, () => {
  console.log('Server is up and running on port 3000...')
});
