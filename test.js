function sum(a) {
    function sum2(b) {
        console.log(a + b)
    }
    return sum2;
}
sum(2)(3)