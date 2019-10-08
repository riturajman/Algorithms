//algorithm to print
//12345
//2345
//345
//45
//5

print = (x) => {
    arr = []
    for (i = x; i <= 5; i++) {
        arr.push(i)
    }
    console.log(arr.join(''))
}

(design = () => {
    x = 1
    do {
        print(x)
        x++
    } while (x <= 5);
})()

