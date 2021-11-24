import axios from 'axios';

const tezTrackerAPI = axios.create({});

tezTrackerAPI.interceptors.request.use((req) => {
  req.baseURL = `https://api.teztracker.com/v2/data/tezos/${sessionStorage.getItem(
    'network',
  )}`;
  return req;
});

const getBlocks = (offset = 0, limit = 15) =>
  tezTrackerAPI.get(`/blocks?limit=${limit}&offset=${offset}`);

const getBlock = (id) => tezTrackerAPI.get(`/blocks/${id}`);

const getHead = () => tezTrackerAPI.get(`/blocks/head`);

export { getBlocks, getBlock, getHead };
