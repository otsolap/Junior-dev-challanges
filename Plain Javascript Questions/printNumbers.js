function printNumbers(num) {
    for (let i = 0; i < num; i++) {
        let answerString = ""

        for (let y = 0; y < i; y++) {
            answerString += "x"
        }
        console.log(answerString)
    }
}