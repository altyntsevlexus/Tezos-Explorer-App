const useDummy = (value) => {
  return value || value === 0 ? value : '-----';
};

export default useDummy;
