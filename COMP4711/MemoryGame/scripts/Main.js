//Starts the game
function play() {
    const board = new Board();
    board.renderBoard();
    Tile.setTileTab(board.blueTileAllocation);
    board.container.removeChild(document.getElementById("play-button"));
}

// terminate the game
function terminateGame() {
    if (confirm('Terminating game, quit?')) {
        localStorage.setItem("Score", currentScore);
        window.location = './summary.html';
    }
}