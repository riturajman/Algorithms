function m1(x, y){
    var temp = x;
    x = y;
    y = temp;
    console.log(x, y)
}

function m2(x, y){
    x = x + y;
    y = x - y;
    x = x - y;
    console.log(x, y)
}

function m3(x, y) {
    x = x*y
    y = x/y
    x = x/y
    console.log(x, y)
}

function m4(x, y){
    x = x ^ y
    y = x ^ y
    x = x ^ y
    console.log(x, y)
}

function m5(x, y){
    x = ~ (x ^ y)
    y = ~ (x ^ y)
    x = ~ (x ^ y)
    console.log(x, y)
}