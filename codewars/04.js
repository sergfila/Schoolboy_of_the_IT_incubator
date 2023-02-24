function oddOrEven(array) {
    let result = 0;

    for (let elem of array) {
        result += elem;
    }

    if (result % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}

let arr = [0, 1, 4];
console.log(oddOrEven(arr))