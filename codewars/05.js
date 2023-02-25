// complete the function
function solution(string) {
    let arr = string.split('');
    let result = [];
    for (let elem of arr) {
        if (elem === elem.toUpperCase()) {
            elem = ' ' + elem;
            result.push(elem);
        } else {
            result.push(elem);
        }
    }

    return result.join('');
}

let str = "camelCase";
console.log(solution(str));