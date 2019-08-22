//algorithm for finding the median of an array of numbers

//NOT WORKING
//Check in debugger

function medianArray(arr) {
    let newarr = [];
    let x, y;

    // write a loop to sort the arrays
    // get length of array and divide it by 2
    // return
    for (i = 0; i <= arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            x = arr[0]
            y = 0
            if (arr[j] < x) {
                x = arr[j]
                y = j
            }
        }
        newarr.push(x);
        arr.splice(y, 1);
        i = 0;
    }
    findMedian(newarr)
    console.log(newarr)
}

function findMedian(newarr) {
    console.log(newarr)
    let x = newarr.length
    console.log(Math.ceil(x / 2))
    if (x % 2 !== 0) {
        return;
        console.log(newarr[Math.floor(x / 2)])
    } else {
            return;
        console.log(((newarr[x / 2]) + newarr[(x / 2) + 1])/2)
    }
}

medianArray([1, 2, 7, 5, 8])