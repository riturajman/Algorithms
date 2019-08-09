//algorithm to find the LCM of an array
function lcmarr(array) {
  let bigNum = array[0];
  for (i = 0; i < array.length; i++) {
    if (bigNum < array[i]) {
      bigNum = array[i];
    }
  }
multiply(bigNum, array, 0, 1);
}

function multiply(bigNum, array, arrNum, mult) {
  if (arrNum == array.length) {
    console.log(bigNum * mult);
  } 
  else if ((bigNum * mult) % array[arrNum] == 0) {
    multiply(bigNum, array, ++arrNum, mult);
  } 
  else {
  
  multiply(bigNum, array, arrNum, ++mult);
  }
}

lcmarr([3, 5, 6, 4, 25]);
