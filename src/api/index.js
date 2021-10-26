const axios = require('axios');

const initialURL = (network) =>
  `https://api.teztracker.com/v2/data/tezos/${network}`;

const getBlocks = (network = 'mainnet', offset = '0', limit = '15') =>
  axios.get(`${initialURL(network)}/blocks?limit=${limit}&offset=${offset}`);

export default getBlocks;
