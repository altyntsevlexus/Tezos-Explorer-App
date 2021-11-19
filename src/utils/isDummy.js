const isDummy = (value) => {
  return value || value === 0 ? value : '-----';
};

export default isDummy;
