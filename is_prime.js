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
    return(myArray)
    
}

function isPrime(x){
    let arr = factor(x)
    if(arr[0] == null){
        console.log("The number is prime.")
    }
    else{
        console.log("The number is not prime.")
    }
}

isPrime(103)