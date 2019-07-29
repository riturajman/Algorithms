//algorith to find modulus without using '%' operation

function modulus(x, y) {
  if(x == 0 || y == 0){
      console.log("NaN")
  }
  else if(processing(Math.abs(x), Math.abs(y)) === 0){
    console.log(0)
  }
  else if(x > 0){
      console.log(processing(x, Math.abs(y)))
  }
  else{
      console.log("-"+processing(Math.abs(x), Math.abs(y)))
  }
}
function processing(x, y) {
  if (x > 0 && y > 0) {
    if (y > x) {
      return(x);
    } else {
      let a = Math.floor(x / y);
      return(x - a * y);
    }
  }
}
modulus(20, 3)
modulus(-22, -1);
