function generateHashtag (str) {

    let result = ['#']

    let arr = str.split(' ');

    for (let elem of arr) {
        elem = elem.charAt(0).toUpperCase() + elem.substr(1);
        result.push(elem);
    }

    result = result.join('');

    if (result.length > 140) {
        return false;
    } else if (result === '#') {
        return false;
    } else {
        return result;
    }

}

console.log(generateHashtag(" Hello there thanks for trying my Kata"))