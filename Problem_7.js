//program to find mean of array
function mean(array){
    var sum = array[0]
    for(i = 1; i < array.length; i++){
        sum = sum + array[i]
    }
    console.log(sum/array.length)
}

mean([1, 2, 3, 4, 5])
mean([2, 5, 7, 10])