function digitalRoot(n) {

    if (n < 0) {
        n *= (-1);
    }

    if (n < 10) {
        return n;
    } else {
        return digitalRoot(n.toString().split('').map(Number).reduce((a, b) => a + b));
    }
}

console.log(digitalRoot(-12222222365))