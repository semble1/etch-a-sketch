const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
    const grid = document.createElement("div");
    grid.classList.add('square');
    container.appendChild(grid);
}

const squares = document.querySelectorAll(".square");

squares.forEach((sqr) => {
    sqr.onclick = function() {selectedSquare(sqr)};
})

function selectedSquare(sqr) {
    sqr.classList.toggle("selected");
}