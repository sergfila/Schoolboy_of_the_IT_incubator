function expandedForm(num) {

    let arr = String(num).split('');

    for(let i = 0 ; i < arr.length; i++ ){

        for(let j = arr.length - i; j > 1; j--){
            arr[i] += '0';
        }
    }

    arr = arr.filter(value => !value.startsWith(0)).join(' + ');
    return arr;
}

console.log(expandedForm(2303));