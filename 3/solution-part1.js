const {readFileSync} = require("fs");
const {join} = require("path");

let input = readFileSync(join(__dirname, "input.txt"), "utf8").replace(/\r/g, "").split("\n");

// input = [
//     "#1 @ 1,3: 4x4",
//     "#2 @ 3,1: 4x4",
//     "#3 @ 5,5: 2x2"
// ];

const quilt = Array.from({length: 10000}).map(r => Array.from({length: 1000}).map(() => 0));

//const quilt = Array.from({length: 9}).map(r => Array.from({length: 11}).map(() => 0))

let overwrote = 0;

const fillBlock = (x, y, id) => {
    if (quilt[y][x] === Infinity) return;
    if (quilt[y][x] !== 0) quilt[y][x] = Infinity, overwrote++;
    else quilt[y][x] = id;
};


for (const val of input) {
    const [id, symbol, coordinates, size] = val.split(" ");
    const [x, y] = coordinates.slice(0, -1).split(",").map(Number);
    const [width, height] = size.split("x").map(Number);
    for (let qY = y; qY < y + height; qY++) {
        for (let qX = x; qX < x + width; qX++) {
            fillBlock(qX, qY, Number(id.slice(1)));
        }
    }
}
console.log(overwrote);