const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  if (members === []) return '';
  if (typeof members === 'number') return false;
  if (typeof members === 'boolean') return false;
  if (members === undefined || members === null) return false;
  if(Array.isArray(members)) {
  let strArr = members.filter(el => typeof el === 'string');
  //console.log(strArr);
  let newArr = [];
  strArr.forEach((el) => {
    newArr.push(el.split(" ").join('').toUpperCase());
  })
 //console.log(newArr);
  let sortArr  = newArr.sort();
  //console.log(sortArr);
  let resultArr = [];
  for(let i=0; i<sortArr.length; i++){
    resultArr.push(sortArr[i][0]);
  }
  
  //console.log(resultArr.toString().split(',').join(''));
  return resultArr.toString().split(',').join('');
}
return false;
}

module.exports = {
  createDreamTeam
};
