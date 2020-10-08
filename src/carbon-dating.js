const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' && sampleActivity !== undefined && sampleActivity < 3 && Number(sampleActivity) <= 3 && sampleActivity !== false && typeof sampleActivity !== 'object'){
    let result = Math.floor((Math.log(MODERN_ACTIVITY/+(sampleActivity)))/(0.639/HALF_LIFE_PERIOD));
    return result;
  } else {
    return false;
  }
};