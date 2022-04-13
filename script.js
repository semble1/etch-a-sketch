const container = document.querySelector(".container");
const reset = document.querySelector(".reset");
let squares = undefined;

//creates a 16x16 grid
function createGrid(size = 16) {
    for (let i = 0; i < size*size; i++) {
        const grid = document.createElement("div");
        grid.classList.add('square');
        container.appendChild(grid);
        squares = document.querySelectorAll(".square");   
    }
    colorSquares();
    container.style.gridTemplateColumns = `repeat(${size}, 0fr)`;
}
createGrid();

//changes the color of a box when it is clicked
function colorSquares() {
    squares.forEach((sqr) => {
        sqr.onclick = function() {selectedSquare(sqr)};
    })
}
function selectedSquare(sqr) {
    sqr.classList.toggle("selected");
}

//resets the grid to blank and asks for size of new grid
reset.onclick = function() {removeColors()};
function removeColors() {
    let size = prompt("How many squares per side?");
    if (size > 50) {
        size = 50;
        alert("50 is the max!");
    }
    squares.forEach(sqr => {
        sqr.remove();
    })
    createGrid(size);
}