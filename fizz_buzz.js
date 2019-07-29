//FizzBuzz puzzle
for(i = 1; i < 101; i++){
let string = ""
if (i % 3 == 0){
    string = string + "Fizz"
}
if (i % 5 == 0){
    string = string + "Buzz"
}
console.log(string || i)
}