var countBits = function(n) {

    n = n.toString(2);
    count = 0;

    for (let i = 0; i < n.length; i++) {
        if (n[i] === '1') {
            count += +1;
        }
    }

    return count;

};

console.log(countBits(1234));