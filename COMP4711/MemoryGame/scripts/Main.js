//Starts the game
function play() {
    const board = new Board();
    board.renderBoard();
    Tile.setTileTab(board.blueTileAllocation);
    board.container.removeChild(document.getElementById("play-button"));
    playSound();
}

// terminate the game
function terminateGame() {
    if (confirm('Terminating game, quit?')) {
        localStorage.setItem("Score", currentScore);
        window.location = './summary.html';
    }
}

// Sets name and player score to localStorage
function setName() {
    let playerData = localStorage.players;
    let players = [];

    if (playerData != null) 
        players = JSON.parse(playerData);

    let tempScore = localStorage.Score;
    let name = document.getElementById("name").value;
    let score = {name: name, score: tempScore};

    players.push(score);

    localStorage.players = JSON.stringify(players);
}

// sorts localStorage and prints out top 5 player scores
function setLeaderBoardScore() {
    var leaderboard = document.getElementById("leaderboard");
    
    var playerData = JSON.parse(localStorage.players);

    playerData.sort(function(a, b){return b.score - a.score});

    for (let i = 0; i < playerData.length; i++) {
        if (i == 5) // Only display top 5. 
            break;
        let li = document.createElement('li');
        li.textContent = "Name: " + playerData[i].name + " ---- " + "Score: " + playerData[i].score;
        leaderboard.appendChild(li);
    }
}

// plays audio 
function playSound() {
    //let playSound = document.getElementById('soundTest');
    var audio = new Audio("../audio/RestartGame.wav");
    audio.play();
}