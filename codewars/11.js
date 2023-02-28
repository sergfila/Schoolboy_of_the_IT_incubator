function findOutlier(integers){

    let count = [];

    for (let item of integers) {
        if (item % 2 === 0) {
            count.push(item);
        }
    }

    if (count.length === 1) {
        return count[0];
    } else {
        count = [];
        for (let item of integers) {
            if (item % 2 !== 0) {
                count.push(item);
                return count[0];
            }
        }
    }

    return;
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));

