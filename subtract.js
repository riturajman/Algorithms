//algorith to subtract two integers without using '-' sign



function subtract(x, y){
let a = 0, b = 0;
if(x >= y){
    for(i = y; i < x; i++){
        a++
    } 
    console.log(a);
}
else{
    for(i = x; i < y; i++){
        b++
    }
    console.log(String.fromCharCode(45) + b)
}}

subtract(5, 5)
subtract(11, 7)
subtract(9, 15)
subtract(-5, 7)
subtract(7, -7)