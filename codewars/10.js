function humanReadable (seconds) {

    if (seconds > 359999) {
        return 'error';
    }

    let hours = Math.floor(seconds / 3600);
    let minuts = Math.floor((seconds - (hours * 3600)) / 60);
    let second = seconds - ((hours * 3600) + (minuts * 60));

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minuts < 10) {
        minuts = '0' + minuts;
    }
    if (second < 10) {
        second = '0' + second;
    }

    let time = hours + ':' + minuts + ':' + second;

    return time ;
}

console.log(humanReadable(55506));