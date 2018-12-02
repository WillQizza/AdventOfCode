const {readFileSync} = require("fs");
const {join} = require("path");

const input = readFileSync(join(__dirname, "input.txt"), "utf8").split("\n");

const getLetterCounts = input => {
    const letters = {};
    for (const char of input) {
        if (!letters[char]) letters[char] = 0;
        letters[char]++;
    }
    return letters;
};

let threes = 0;
let twos = 0;

for (const str of input) {
    const count = Object.values(getLetterCounts(str));
    if (count.includes(3)) threes++;
    if (count.includes(2)) twos++;
}
console.log(threes, twos, threes * twos);