import axios from 'axios';

const tezTrackerAPI = axios.create({
  baseURL: 'https://api.teztracker.com/v2/data/tezos/',
});

const getBlocks = (network = 'mainnet', offset = 0, limit = 15) =>
  tezTrackerAPI.get(`${network}/blocks?limit=${limit}&offset=${offset}`);

const getBlock = (network = 'mainnet', id) =>
  tezTrackerAPI.get(`${network}/blocks/${id}`);

const getHead = (network = 'mainnet') =>
  tezTrackerAPI.get(`${network}/blocks/head`);

export { getBlocks, getBlock, getHead };
