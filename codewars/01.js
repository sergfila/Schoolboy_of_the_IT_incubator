String.prototype.toJadenCase = function () {
    let arr = this.split(' ');
    let arr2 = [];

    for (let elem of arr) {
        elem = elem.charAt(0).toUpperCase() + elem.slice(1);
        arr2.push(elem);
    };

    return arr2 = arr2.join(' ');
};

let str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());