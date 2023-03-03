function createPhoneNumber(numbers){

    if (numbers.length !== 10) {
        return;
    }

    let codeNum = [];
    let midNum = [];
    let endNum = [];

    for (let i = 0; i < numbers.length; i++) {
        if (i < 3) {
            codeNum.push(numbers[i]);
        } else if (i > 2 && i < 6) {
            midNum.push(numbers[i]);
        } else {
            endNum.push(numbers[i]);
        }
    }

    codeNum = '(' + codeNum.join('') + ')';
    midNum = ' ' + midNum.join('') + '-';
    endNum = endNum.join('');

    return codeNum + midNum + endNum;
}

console.log(createPhoneNumber([9, 1, 5, 8, 5, 9, 1, 8, 8, 9]));