//algorith to print the following pattern\
//12345
//1234
//123
//12
//1

print = (x) => {
    arr = []
    for (i = 1; i <= x; i++) {
        arr.push(i)
    }
    console.log(arr.join(''))
}

(design = () => {
    for (x = 5; x >= 1; x--) {
        print(x)
    }
})()

