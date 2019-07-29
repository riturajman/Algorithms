//algorithm to find the highest common factor of two nunbers
//using good old loop
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


//using recursion
function hcf2(x, y){
    let a = 1, b = 1
    if(x > y){
    a = y
    }
    else{
    a = x
    }
check(x, y, a)
}

function check(x, y, z){
    if(x % z === 0 && y % z === 0){
        console.log(z)
    }
    else{
        check(x, y, z - 1)
    }
}

hcf(100, 18)
hcf2(100, 18)