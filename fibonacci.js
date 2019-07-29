//produce fibonacci series using recursion

let x = 0
let y = 1

function fibo(){
    if(x < 5000){
        console.log(y)
        x = x + y
        console.log(x)
        y = y + x 
        fibo()      
    }
}

fibo()