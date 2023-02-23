function descendingOrder(n){
    let arr = n.toString().split('').sort().reverse().join('');
    return Number(arr);
}

let num = 42145
console.log(descendingOrder(num));