const {readFileSync} = require("fs");
const {join} = require("path");
const input = readFileSync(join(__dirname, "input.txt"), "utf8").split("\n");

let nums = [];
let int = 0;

while (true) {
    for (const val of input) {
        int += eval(val);
        if (nums.includes(int)) {
            console.log(int);
            process.exit();
        }
        nums.push(int);
    }
}