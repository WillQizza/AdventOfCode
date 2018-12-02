const {readFileSync} = require("fs");
const {join} = require("path");

const input = readFileSync(join(__dirname, "input.txt"), "utf8").replace(/\r/g, "").split("\n");

const findClosestMatches = inp => {
    const closest = [];
    for (const val of input) {
        let diff = 0;
        for (const char in val) if (val[char] !== inp[char]) diff++;
        if (diff === 1) closest.push(val);
    }
    return closest;
};

for (const v of input) {
    const results = findClosestMatches(v);
    if (results.length > 0) console.log(results, v);
}

//From here 2 strings are outputted. Notice that the 3rd character is different, remove that and you get your answer.