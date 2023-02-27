function twoSum(numbers, target) {

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i+1; j < numbers.length; j++) {

            let sum = numbers[i] + numbers[j];

            if (target === sum) {
                return [i, j];
            }
        }
    }
}

console.log(twoSum([2,3,4,5], 6));