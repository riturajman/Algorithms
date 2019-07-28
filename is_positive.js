//Problem to check if input is positive
function isPositive(x){
    if(x == 0){
        console.log("The number you have entered is neither positive nor negative")
    }
    else if (x > 0){
        console.log("Your number is positive")
    }
    else if(x < 0){
        console.log("Your number is negative")
    }
    else{
        console.log("Invaid Input")
    }

}

isPositive(-3)
isPositive(0)
isPositive(10)