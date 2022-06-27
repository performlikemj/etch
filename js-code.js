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

const bod = document.querySelector('body');
bod.appendChild(container);