function isUp(x){
    return Math.sign(x) == -1 || Object.is(x, -0) ? console.log("Down") : console.log("Up")
    
}

isUp(-2)
isUp(-0)
isUp(2)
isUp(0)