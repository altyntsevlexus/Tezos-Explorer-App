const axios = require('axios');

const initialURL = (network) =>
  `https://api.teztracker.com/v2/data/tezos/${network}`;

const getBlocks = (network = 'mainnet', offset = '0', limit = '15') =>
  axios.get(`${initialURL(network)}/blocks?limit=${limit}&offset=${offset}`);

const getBlock = (network = 'mainnet', id) =>
  axios.get(`${initialURL(network)}/blocks/${id}`);

export { getBlocks, getBlock };
