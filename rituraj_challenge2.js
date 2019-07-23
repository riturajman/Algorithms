function add(x, y) {
  let result = [];
  let carry = 0;
  z = 0;
  if (x.length > y.length) {
    z = x.length;
  } else {
    z = y.length;
  }
  let newx = x.padStart(z, "0");
  let newy = y.padStart(z, "0");
  let index = z;
  for (let i = 0; i < z; i++) {
    let currentx = parseInt(newx[index - 1]);
    let currenty = parseInt(newy[index - 1]);
    index = index - 1;
    if (currentx + currenty + carry > 9) {
      let m = currentx + currenty + carry - 10;
      result.unshift(m);
      carry = 1;
    } else {
      let n = currentx + currenty + carry;
      result.unshift(n);
      carry = 0;
    }
  }
  if(carry === 1){
      result.unshift("1")
  }
 return printarray(result);
}

function printarray(arr) {
  var answer = "";
  for (i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer;
}

console.log(add("5987342879234789234897", "23489072349807239487"));
console.log(add("893427328497983427893248932498034289324","234859234879342897893427893274"))

