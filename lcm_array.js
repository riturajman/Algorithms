function lcmarr(array) {
  let x = array[0];
  for (i = 0; i < array.length; i++) {
    if (x < array[i]) {
      x = array[i];
    }
    multiply(x, array, 0, 1);
  }
}

function multiply(x, array, a, y) {
  if (a == array.length) {
    return (x * y);
  } 
  else if ((x * y) % array[a] == 0) {
    multiply(x, array, a++, y);
  } 
  else {
    multiply(x, array, 0, y++);
  }
}

lcmarr([3, 5, 6]);
