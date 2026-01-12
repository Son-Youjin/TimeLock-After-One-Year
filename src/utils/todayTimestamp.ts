const TODAY_TIMESTAMP = (() => {
  const day = new Date();
  day.setHours(0, 0, 0, 0);
  return day.getTime();
})();

export default TODAY_TIMESTAMP;
