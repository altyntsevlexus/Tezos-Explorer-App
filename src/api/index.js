import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.teztracker.com/v2/data/tezos/',
});

const getBlocks = (network = 'mainnet', offset = '0', limit = '15') =>
  instance.get(`${network}/blocks?limit=${limit}&offset=${offset}`);

const getBlock = (network = 'mainnet', id) =>
  instance.get(`${network}/blocks/${id}`);

export { getBlocks, getBlock };
