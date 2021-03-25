const Blockchain = require('./blockchain');

const bidcoin = new Blockchain();

//1.
// bidcoin.createNewBlock(2000, '1ONINA8998DSFHF', '1MONINA8998DSFHF');

// bidcoin.createNewBlock(3000, '2ONINA8998DSFHF', '2MONINA8998DSFHF');

// bidcoin.createNewBlock(4000, '3ONINA8998DSFHF', '3MONINA8998DSFHF');

//2.
bidcoin.createNewBlock(892348, '1ONINA8998DSFHF','2ONINA8998DSFHF');

bidcoin.createNewTransaction(100, 'ADLAN2ONINA8998DSFHF', 'JULIA2MONINA8998DSFHF');

bidcoin.createNewBlock(999999, '2ONINA8998DSFHF', '2MONINA8998DSFHF');

bidcoin.createNewTransaction(100, 'ADLAN3ONINA8998DSFHF', 'JULIA3MONINA8998DSFHF');
bidcoin.createNewTransaction(200, 'ADLAN4ONINA8998DSFHF', 'JULIA4MONINA8998DSFHF');
bidcoin.createNewTransaction(300, 'ADLAN5ONINA8998DSFHF', 'JULIA5MONINA8998DSFHF');

bidcoin.createNewBlock(899999, '3ONINA8998DSFHF', '3MONINA8998DSFHF');

console.log(bidcoin.chain[2]);