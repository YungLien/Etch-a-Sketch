document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#container');
    const button = document.createElement('button');
    button.textContent = 'Change Size';
    button.classList.add('my-button');
    container.appendChild(button);

    const gridContainer = document.getElementById('gridContainer');
    container.appendChild(gridContainer); // Append gridContainer after the button

    function createDiv(num = 16) { // Set default value to 16
        gridContainer.innerHTML = ''; // Clear existing grid
        for (let i = 0; i < num; i++) {
            for (let j = 0; j < num; j++) {
                const div = document.createElement('div');
                div.style.width = `calc(100% / ${num})`;
                div.style.height = `calc(100% / ${num})`;
                div.classList.add('square');
                div.addEventListener('mouseover', changeColor); // Add mouseover event listener
                gridContainer.appendChild(div);
            }
        }
    }

    function randomRGB() {
        let rgb1 = Math.floor(Math.random() * 256);
        let rgb2 = Math.floor(Math.random() * 256);
        let rgb3 = Math.floor(Math.random() * 256);
        return `rgb(${rgb1},${rgb2},${rgb3})`;
    }

    function changeColor(event) {
        const randomColor = randomRGB();
        event.target.style.backgroundColor = randomColor;
    }

    button.addEventListener('click', () => {
        const newSize = prompt('What number of squares per side for the new grid would you like?');
        if (newSize && !isNaN(newSize) && newSize > 0 && newSize <= 100) {
            createDiv(parseInt(newSize));
        } else if (newSize > 100) {
            alert('Please enter a valid number smaller than or equal to 100');
        } else {
            alert('Please enter a valid number greater than 0');
        }
    });

    createDiv(); // Call function with default value
});
