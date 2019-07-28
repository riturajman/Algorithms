//algorithm to find the highest common factor of two nunbers

function hcf(x, y){
    let a = 1, b = 1
    if(x > y){
    a = y
    }
    else{
    a = x
    }
    for(i = 1; i <= a; i++){
        if(x % i === 0 && y % i === 0){
            b = i
        }
    }
console.log(b)
}

hcf(150, 200)