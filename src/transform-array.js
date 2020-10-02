const { prototype } = require("mocha");
const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let result = [];
  let workCopy = arr;
  if (!Array.isArray(arr)){
    throw new Error('Not Array!!');
  } else {
    for (let i = 0; i < arr.length; i++){
      if (arr[i] === '--discard-next'){
        workCopy[i+1] = 'NaN';
        workCopy[i] = 'NaN';
      }
      if (arr[i] === '--discard-prev')
        {
          if (i != 0){
          workCopy[i-1] = 'NaN';
          }
          workCopy[i] = 'NaN';
        }
      if (arr[i] === '--double-next'){
        if (arr.length !== i+1){
          let sideA = workCopy.slice(0,i)
          let sideB = workCopy.slice(i+1);
          sideA.push(arr[i+1]);
          workCopy = sideA.concat(sideB);
        } else {
          workCopy[i] = 'NaN';
        }
      }
      if (arr[i] === '--double-prev'){
          if (i != 0){
          let sideA = workCopy.slice(0,i)
          let sideB = workCopy.slice(i+1);
          console.log(sideB);
          sideA.push(workCopy[i-1]);
          console.log(sideA);
          workCopy = sideA.concat(sideB);
          console.log(workCopy);
         } else {
          workCopy[i] = 'NaN';
         }
      }
    }
  }
  for (let el of workCopy){
    if (el != 'NaN'){
      result.push(el);
    }
  }
  return result;
};