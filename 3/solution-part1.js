const {readFileSync} = require("fs");
const {join} = require("path");

const input = readFileSync(join(__dirname, "input.txt"), "utf8").replace(/\r/g, "").split("\n");

const fabric = Array.from({length: 1000}).map(() => Array.from({length: 1000}));

let overwrote = 0;

const fillBlock = (x, y) => {
    switch (fabric[y][x]) {
        case 0:
            fabric[y][x] = 1;
            overwrote++;
        break;
        case 1:
        break;
        default:
            fabric[y][x] = 0;
        break;
    }
};

for (const val of input) {
    const values = val.split(/ /);
    let [, , coords, size] = values;
    const splitCoords = coords.slice(0, -1).split(",");
    const [x, y] = splitCoords.map(Number);
    const splitSize = size.split("x");
    const [width, height] = splitSize.map(Number);
    const endY = y + height;
    const endX = x + width;
    for (let qY = y; qY < endY; qY++) {
        for (let qX = x; qX < endX; qX++) fillBlock(qX, qY);
    }
}

console.log(overwrote);