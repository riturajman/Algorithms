//algorithm to find the LCM of an array
function lcmarr(array) {
  let bigNum = array[0];
  for (i = 0; i < array.length; i++) {
    if (bigNum < array[i]) {
      bigNum = array[i];
    }
  }
return multiply(bigNum, array, 0, 1);
}

function multiply(bigNum, array, arrNum, mult) {
  if (arrNum == array.length) {
    return (bigNum * mult);
  } 
  else if ((bigNum * mult) % array[arrNum] == 0) {
    multiply(bigNum, array, ++arrNum, mult);
  } 
  else {
  
  multiply(bigNum, array, arrNum, ++mult);
  }
}

console.log(lcmarr([3, 5, 6, 4, 25]));
