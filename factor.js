let myArray = []
function factor (x){
    for(let i = 2; i <= Math.sqrt(x); i++){
        if(x % i == 0){
            myArray.push(i);
            if(i !== x/i){
            myArray.push(x/i)
            }
        }
    }
    console.log(myArray)
    
}
factor(9)