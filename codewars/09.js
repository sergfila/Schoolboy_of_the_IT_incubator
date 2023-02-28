function isValidWalk(walk) {

    if (walk.length != 10) {
        return false;
    } else {

        let countN = 0;
        let countS = 0;
        let countW = 0;
        let countE = 0;

        for (let elem of walk) {
            if (elem === 'n') {
                countN += 1;
            } else if (elem === 's') {
                countS += 1;
            } else if (elem === 'w') {
                countW += 1;
            } else if (elem === 'e') {
                countE += 1;
            } else {
                return false;
            }
        }

        if (countN === countS && countW === countE) {
            return true;
        } else {
            return false;
        }
    }

}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));