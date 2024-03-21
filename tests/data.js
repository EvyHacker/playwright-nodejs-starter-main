// data.js
let testData = {};

module.exports = {
  setTestData: (data) => {
    testData = data;
  },
  getTestData: () => testData
};
