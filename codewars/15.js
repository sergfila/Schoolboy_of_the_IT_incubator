function spinWords(string){

    let arr = string.split(' ');
    let result = [];

    for (let elem of arr) {
        if (elem.length > 4) {
            elem = elem.split('').reverse().join('');
            result.push(elem);
        } else {
            result.push(elem);
        }
    }

    return (result = result.join(' '));

}

console.log(spinWords("Just kidding there is still one more"));