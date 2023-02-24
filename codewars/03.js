function alphabetPosition(text) {

    let result = "";
    text = text.toLowerCase();

    for (let item of text) {
        let table = item.charCodeAt() - 96;
        if (table > 0 && table <= 26)
            result += table + ' ';
    }

    return result.slice(0, -1); ;
}

let str = "The sunset sets at twelve o' clock."
console.log(alphabetPosition(str));