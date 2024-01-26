function makeLine(size) {
    let line = "";
    for (i = 0;i < size; i++){
    line += "#"
    }
    return line;
}

console.log(makeLine(5));

function makeRectangle(Width, Height) {
    let Rectangle = '';
    for (i = 0; i < Height; i++) {
    Rectangle += (makeLine(Width) + '\n');
    }
    console.log(Rectangle.slice(0, -1));
}

makeRectangle(3, 5)

function makeStairs(size) {
    let Stair = "";
    for (i = 0; i < size; i++){
    Stair += (makeLine(i) + '\n');
    }
    console.log(Stairs(0, -1))
}

// function makeSpaceLine(space) {
//     let middle = '';
//     for (i = 0, i < )
// }