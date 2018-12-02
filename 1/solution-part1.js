//@ts-check
const {readFileSync} = require("fs");
const {join} = require("path");

const input = readFileSync(join(__dirname, "input.txt"), "utf8").split("\n");

let int = 0;
for (const val of input) int += eval(val);
console.log(int);