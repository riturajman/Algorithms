//Program to check if given input is even

//using remainders
function check(x){
    if(x % 2 == 0){
        console.log("Even")
    }
    else {
        console.log("Odd")
    }
}

//Using recursion
function check2(x){
    if(x < 0){
        x = x + 2
        check(x)
    }
    else if(x > 1){
        x = x - 2
        check(x)
    }
    else if(x == 1){
        console.log("Odd")
    }
    else{
        console.log("Even")
    }
}

check (-26)
check (-25)
check (25)
check (26)
check2 (-26)
check2 (-25)
check2 (25)
check2 (26)