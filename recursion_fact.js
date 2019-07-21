//find factorial of a number
let x = 1
let z = 1

function fact(a){
    z = z * x
    if(x < a){
        x++
        fact(a)
    }
    else if(a < 0){
        console.log("There cannot be factorial of negative numbers")
    }
    else{
        // console.log("Done")
        console.log(z)
    }
    
}

fact(-4)
fact(0)
fact(10)