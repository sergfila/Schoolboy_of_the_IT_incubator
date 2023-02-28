const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only change code below this line
    let result = strokes - par;

    if (strokes === 1) {
        return "Hole-in-one!";
    } else if (result <= -2) {
        return "Eagle";
    } else if (result === -1) {
        return "Birdie";
    } else if (result === 0) {
        return "Par";
    } else if (result === 1) {
        return "Bogey";
    } else if (result === 2) {
        return "Double Bogey";
    } else {
        return "Go Home!";
    }

    return "Change Me";
    // Only change code above this line
}

golfScore(5, 4);