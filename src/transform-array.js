const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr){
  if (arr === []) return [];
  if(!Array.isArray(arr)) {
    throw new Error (`'arr' parameter must be an instance of the Array!`)
  }
  if (!arr.includes('--double-next') || !arr.includes('--double-prev') || !arr.includes('--discard-next') || !arr.includes('--discard-prev')) return arr ;
  let newArr = arr;

  if(newArr.includes('--discard-next') && newArr.includes('--double-prev')){
    let delN = newArr.indexOf('--discard-next');
    newArr.splice(delN, 2);
    let doubleP = newArr.indexOf('--double-prev');
    newArr.splice(doubleP, 1);
      return newArr;

  }

   if(newArr.includes('--discard-next') && newArr.includes('--discard-prev')) {
    let delN = newArr.indexOf('--discard-next');
    newArr.splice(delN, 2);
    let delP = newArr.indexOf('--discard-prev');
    newArr.splice(delP, 1);
      return newArr;

    }

  if(newArr.includes('--double-next') && newArr.includes('--double-prev')) {
    let doubleN = newArr.indexOf('--double-next');
    newArr.splice(doubleN, 1, newArr[doubleN + 1]);
    let doubleP = newArr.indexOf('--double-prev');
    if (newArr[doubleP - 1]) {
      newArr.splice(doubleP, 1, newArr[doubleP - 1]);
      return newArr; 
      }else {
        newArr.splice(doubleP, 1);
      return newArr; 
      }
    }
  
  if(newArr.includes('--double-next') && newArr.includes('--discard-prev')) {
    let doubleN = newArr.indexOf('--double-next');
    newArr.splice(doubleN, 1, newArr[doubleN + 1]);
    let delP = newArr.indexOf('--discard-prev');
    newArr.splice((delP - 1), 2);
    return newArr; 
  }

  if(newArr.includes('--discard-prev')) {
    let delP = newArr.indexOf('--discard-prev');
    if (newArr[delP - 1]) {
    newArr.splice((delP - 1), 2);
    return newArr; 
    } else {
      newArr.splice(delP, 1);
    return newArr; 
    }
   }

   if(newArr.includes('--double-prev')) {
    let doubleP = newArr.indexOf('--double-prev');
    if (newArr[doubleP - 1]) {
    newArr.splice(doubleP, 1, newArr[doubleP - 1]);
    return newArr; 
    }else {
      newArr.splice(doubleP, 1);
    return newArr; 
    }
   }
   
   if(newArr.includes('--double-next')) {
    let doubleN = newArr.indexOf('--double-next');
    if (newArr[doubleN + 1]) {
    newArr.splice(doubleN, 1, newArr[doubleN + 1]);
    return newArr; 
    } else {
      newArr.splice(doubleN, 1);
    return newArr; 
    }
  }


   if(newArr.includes('--discard-next')) {
    let delN = newArr.indexOf('--discard-next');
    if (newArr[delN + 1]) {
    newArr.splice(delN, 2);
    return newArr; 
    }else {
      newArr.splice(delN, 1);
    return newArr; 
    }
   }
   return [];
}

module.exports = {
  transform
};
