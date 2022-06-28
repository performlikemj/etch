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
    let dimension = prompt('What size do you want the grid \
                            to be (limit 100)', size);
    if (dimension > 100) {
        dimension = prompt('Size limit of 100. Please choose again', size);
    } else {
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
    }
});


/* Highlight functionality */

function highlight() {
    let x = Math.floor((Math.random() * 255) + 1);
    let y = Math.floor((Math.random() * 255) + 1);
    let z = Math.floor((Math.random() * 255) + 1);
    this.style.backgroundColor = `rgb(${x},${y},${z})`;
}

/* Highlight functionality end */


const bod = document.querySelector('body');
bod.appendChild(button);
bod.appendChild(container);

let grids = document.querySelectorAll('.row, .col');
grids.forEach(grid => grid.addEventListener('mouseover', highlight));