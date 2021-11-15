import axios from 'axios';

const tezTrakerAPI = axios.create({
  baseURL: 'https://api.teztracker.com/v2/data/tezos/',
});

const getBlocks = (network = 'mainnet', offset = '0', limit = '15') =>
  tezTrakerAPI.get(`${network}/blocks?limit=${limit}&offset=${offset}`);

const getBlock = (network = 'mainnet', id) =>
  tezTrakerAPI.get(`${network}/blocks/${id}`);

export { getBlocks, getBlock };
