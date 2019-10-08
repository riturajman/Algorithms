//algorithm to print
//12344321
//123**321
//12****21
//1******1

//takes in an array and adds its reverse to the end
//input -> 123 ; oputput -> 123321
printReverse = (arr) => {
    newArr = [arr]
    for (i = 3; i >= 0; i--) {
        newArr.push(arr[i])
    }
    console.log(newArr.join(''))
}

//prints the first half of the desired pattern
print = (x) => {
    arr = []
    for (i = 1; i <= 4; i++) {
        if (i > x) {
            arr.push("*")
        } else {
            arr.push(i)
        }
    }
    printReverse(arr.join(''))
}

(design = () => {
    x = 4
    do {
        print(x)
        x--
    } while (x >= 1);
})()