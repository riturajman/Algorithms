//algorithm to multiply an input by 3.5 wihtout using the multiply operator
let multiply = (x) => {
    let y = 0;
    for (i = 0; i < 3; i++) {
        y = y + x
    }
    addhalf(x, y)
}

let addhalf = (x, y) => {
    let a = 0, b = x
    while (a < b - 1) {
        ++a;
        --b;
    }
    console.log(Math.floor(y + a))
}

multiply(8)