const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  const cat = "^^";
  let count = 0;
  searchCats(backyard);
  function searchCats(arr) {
    for (let i of arr) {
      if (Array.isArray(i)) {
        searchCats(i);
      } else if (i === cat) {
        count++;
      }
    }
  }
  return count;
};
