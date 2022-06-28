const container = document.createElement('div');
container.classList.add('container');
for (let i = 0; i < 5; i++) {
    let square = document.createElement('div');
    container.appendChild(square);
    square.classList.add('row');
    for (let j = 0; j < 5; j++) {
        let col = document.createElement('div');
        square.appendChild(col);
        col.classList.add('col');
    }
};

const button = document.createElement('button');
button.classList.add('dimensions');
button.innerText = 'Dimensions';

function highlight() {
    this.style.backgroundColor = 'yellow';
}


const bod = document.querySelector('body');
bod.appendChild(button);
bod.appendChild(container);

const grids = document.querySelectorAll('.row, .col');
grids.forEach(grid => grid.addEventListener('mouseover', highlight));