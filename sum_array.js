//Program to find the sum of a given array
function sum(array) {
    let total = 0
    for(i = 0; i < array.length; i++){
        total = total + array[i]
    }
    console.log(total)
}

sum([1, 2, 3, 4, 5])