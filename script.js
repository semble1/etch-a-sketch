const container = document.querySelector(".container");
const reset = document.querySelector(".reset");

//creates a 16x16 grid
for (let i = 0; i < 256; i++) {
    const grid = document.createElement("div");
    grid.classList.add('square');
    container.appendChild(grid);
}

const squares = document.querySelectorAll(".square");

//changes the color of a box when it is clicked
squares.forEach((sqr) => {
    sqr.onclick = function() {selectedSquare(sqr)};
})
function selectedSquare(sqr) {
    sqr.classList.toggle("selected");
}

//resets the grid to blank
reset.onclick = function() {removeColors()};
function removeColors() {
    squares.forEach((sqr) => {
        sqr.classList.remove("selected");
    })
}