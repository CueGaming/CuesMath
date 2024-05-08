document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const size = 4;
    let board = [];
    let currentScore = 0;
    const currentScoreElem = document.getElementById('current-score');
    const gameOverElem = document.getElementById('game-over');

    // Get the high score from local storage or set it to 0 if not found
    let highScore = localStorage.getItem('2048-highScore') || 0;
    const highScoreElem = document.getElementById('high-score');
    highScoreElem.textContent = highScore;

    // Function to update the score
    function updateScore(value) {
        currentScore += value;
        currentScoreElem.textContent = currentScore;
        if (currentScore > highScore) {
            highScore = currentScore;
            highScoreElem.textContent = highScore;
            localStorage.setItem('2048-highScore', highScore);
        }
    }

    // Function to restart the game
    function restartGame() {
        currentScore = 0;
        currentScoreElem.textContent = '0';
        gameOverElem.style.display = 'none';
        initializeGame();
    }

    // Function to initialize the game
    function initializeGame() {
        board = [...Array(size)].map(e => Array(size).fill(0));
        placeRandom();
        placeRandom();
        renderBoard();
    }

    // Function to render the game board on the UI
    function renderBoard() {
        // Rendering logic remains the same
    }

    // Function to place a random tile on the board
    function placeRandom() {
        // Placement logic remains the same
    }

    // Function to move the tiles based on touch events
    let touchStartX, touchStartY;

    grid.addEventListener('touchstart', handleTouchStart, false);
    grid.addEventListener('touchmove', handleTouchMove, false);

    function handleTouchStart(event) {
        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
    }

    function handleTouchMove(event) {
        if (!touchStartX || !touchStartY) {
            return;
        }

        const touchEndX = event.touches[0].clientX;
        const touchEndY = event.touches[0].clientY;

        const dx = touchEndX - touchStartX;
        const dy = touchEndY - touchStartY;

        if (Math.abs(dx) > Math.abs(dy)) {
            if (dx > 0) {
                move('ArrowRight');
            } else {
                move('ArrowLeft');
            }
        } else {
            if (dy > 0) {
                move('ArrowDown');
            } else {
                move('ArrowUp');
            }
        }

        touchStartX = null;
        touchStartY = null;
    }

    // Function to move the tiles based on arrow key input
    function move(direction) {
        // Movement logic remains the same
    }

    // Function to check if the game is over
    function checkGameOver() {
        // Game over check logic remains the same
    }

    // Event listeners for restart button and arrow keys remain the same

    initializeGame();

});
