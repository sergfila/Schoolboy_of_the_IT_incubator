function arrayDiff(a, b) {

    let result = [];

    for (let elem of a) {
        if (b.indexOf(elem) === -1) {
            result.push(elem);
        }
    }

    return result;
}

console.log(arrayDiff([1,2,2,2,3],[2]));