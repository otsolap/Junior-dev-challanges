const arr = [1, 10, 6, 4, 5]
const reducer = (previousValue, currentValue) => previousValue + currentValue

function LargestFour(arr) {
    // if equal or less than 4. Summarize it all and return
    if (arr.length <= 4) {
        return arr.reduce(reducer)
    } else {
        // Sorts the highest value.
        arr.sort((a, b) => a < b ? 1 : a > b ? -1 : 0)
        newArr = []
        // we only want 4 highest values.
        for (let i = 0; i < 4; i++) {
            newArr.push(arr[i]);
        }
        const sumOfArr = newArr.reduce((partial_sum, a) => partial_sum + a, 0)
        return sumOfArr
    }
}

console.log(largestFour(arr))