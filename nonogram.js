// Initialize an empty 10x10 puzzle
const puzzle = Array.from({ length: 10 }, () => Array(10).fill(0));

// Create the nonogram grid
const nonogram = document.getElementById('nonogram');

for (let i = 0; i < puzzle.length; i++) {
  for (let j = 0; j < puzzle[i].length; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.row = i;
    cell.dataset.col = j;
    cell.addEventListener('click', toggleCell);
    nonogram.appendChild(cell);
  }
}

// Function to toggle the cell state on click
function toggleCell() {
  const row = parseInt(this.dataset.row);
  const col = parseInt(this.dataset.col);
  puzzle[row][col] = 1 - puzzle[row][col]; // Toggle between 0 and 1
  updateGrid();
}

// Function to update the nonogram grid based on the puzzle
function updateGrid() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, index) => {
    const row = Math.floor(index / puzzle.length);
    const col = index % puzzle.length;
    cell.textContent = puzzle[row][col] === 1 ? 'X' : '';
  });
}

// Initial grid setup
updateGrid();
