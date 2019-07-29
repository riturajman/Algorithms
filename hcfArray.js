let results = [];
function hcf(array) {
  let a = array[0],
    b = 1;
  for (i = 0; i < array.length; i++) {
    if (a > array[i]) {
      a = array[i];
    }
  }
  for (c = 1; c <= a; c++) {
    check(c, array, 0);
  }
  maxInArray(results);
}

function check(c, array, z) {
  if (z === array.length) {
    results.push(c);
  } else if (array[z] % c === 0) {
    check(c, array, z + 1);
  }
}

function maxInArray(array) {
  let a = array[0];
  for (i = 1; i < array.length; i++) {
    if (a < array[i]) {
      a = array[i];
    }
  }
  console.log(a);
}

hcf([75, 15, 30, 90]);