let x = 0
function a(){
x = x + 1
if(x <= 100)
    b(x)
}

function b(x){
console.log("Hello", x)
a()}

a()