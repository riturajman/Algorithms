function swap(array1, array2) {
    let m = array1.length, n = array2.length
  if (array1.length > array2.length) {
    a = array1.length;
  } else {
    a = array2.length;
  }
  for (i = 0; i < a; i++) {
    if(array1[i] !== undefined && array2[i] !== undefined){
        array1[i] = array1[i] ^ array2[i];
        array2[i] = array1[i] ^ array2[i];
        array1[i] = array1[i] ^ array2[i];
    }
    else if(array1[i] !== undefined && array2[i] === undefined){
        array2[i] = array1[i]
    }
    else{
        array1[i] = array2[i]
    }
  }
  console.log(array1.slice(0, n), array2.slice(0, m));
}

swap([1, 2], [5, 6, 7, 8, 9, 12, 15]);