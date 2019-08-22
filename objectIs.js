// TODO: define polyfill for `Object.is(..)`


function check(x, y){
    var xnegzero = isnegzero(x)
    var ynegzero = isnegzero(y)
    if(xnegzero || ynegzero){
    return xnegzero && ynegzero
    }
    else if(Number.isNaN(x) && Number.isNaN(y)){
        return true
    }
    else if (x === y){
        return true
    }
    else {
        return false
    }
    function isnegzero(v){
    //    return v == 0 && 1/v == -Infinity
    if (v == 0 && 1/v == -Infinity){ 
    return true}
    else {
        return false}
    }
    }



















tests:
console.log(check(42, 42) === true);
console.log(check('foo', 'foo') === true);
console.log(check(false, false) === true);
console.log(check(null, null) === true);
console.log(check(undefined, undefined) === true);
console.log(check(NaN, NaN) === true);
console.log(check(-0, -0) === true);
console.log(check(0, 0) === true);

console.log(check(-0, 0) === false);
console.log(check(0, -0) === false);
console.log(check(0, NaN) === false);
console.log(check(NaN, 0) === false);
console.log(check(42, '42') === false);
console.log(check('42', 42) === false);
console.log(check('foo', 'bar') === false);
console.log(check(false, true) === false);
console.log(check(null, undefined) === false);
console.log(check(undefined, null) === false);

