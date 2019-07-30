var readlineSync = require('readline-sync');
var arr1 = JSON.parse(readlineSync.question("Enter array 1: "))
var arr2 = JSON.parse(readlineSync.question("Enter array 2: "))
function factor(x) {
  let myArray = [];
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i == 0) {
      myArray.push(i);
      if (i !== x / i) {
        myArray.push(x / i);
      }
    }
  }
  return myArray;
}

function isPrime(x) {
  let arr = factor(x);
  if (x === 1 || x === 0) {
    return false;
  } else if (arr[0] == null) {
    return true;
  } else {
    return false;
  }
}

function check(array) {
  returnArray = [];
  for (i = 0; i < array.length; i++) {
    if (isPrime(array[i]) === true) {
      returnArray.push(array[i]);
    }
  }
  return returnArray;
}

function swapPrime(array1, array2) {
  array1 = check(array1);
  array2 = check(array2);
  let m = array1.length,
    n = array2.length;
  if (array1.length > array2.length) {
    a = array1.length;
  } else {
    a = array2.length;
  }
  for (i = 0; i < a; i++) {
    if (array1[i] !== undefined && array2[i] !== undefined) {
      array1[i] = array1[i] ^ array2[i];
      array2[i] = array1[i] ^ array2[i];
      array1[i] = array1[i] ^ array2[i];
    } else if (array1[i] !== undefined && array2[i] === undefined) {
      array2[i] = array1[i];
    } else {
      array1[i] = array2[i];
    }
  }
  console.log("Array 1:", array1.slice(0, n));
  console.log("Array 2:", array2.slice(0, m))
}
swapPrime(arr1, arr2)