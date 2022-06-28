const container = document.createElement('div');
container.classList.add('container');
for (let i = 0; i < 16; i++) {
    let square = document.createElement('div');
    container.appendChild(square);
    square.classList.add('row');
    for (let j = 0; j < 16; j++) {
        let col = document.createElement('div');
        square.appendChild(col);
        col.classList.add('col');
    }
};

/* Grid dimension functionality */

const button = document.createElement('button');
button.classList.add('dimensions');
button.innerText = 'Dimensions';

let size = 16;
button.addEventListener('click', () => {
    let dimension = prompt('What size do you want the grid to be (default 16x16)', size);
    size = dimension;
    const boxes = document.querySelectorAll('.row, .col');
    boxes.forEach(box => box.remove());
    for (let i = 0; i < size; i++) {
        let square = document.createElement('div');
        container.appendChild(square);
        square.classList.add('row');
        for (let j = 0; j < size; j++) {
            let col = document.createElement('div');
            square.appendChild(col);
            col.classList.add('col');
        }
    };
    let grids = document.querySelectorAll('.row, .col');
    grids.forEach(grid => grid.addEventListener('mouseover', highlight));
});


/* Highlight functionality */

function highlight() {
    this.style.backgroundColor = 'yellow';
}

/* Highlight functionality end */


const bod = document.querySelector('body');
bod.appendChild(button);
bod.appendChild(container);

let grids = document.querySelectorAll('.row, .col');
grids.forEach(grid => grid.addEventListener('mouseover', highlight));