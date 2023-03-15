var TicTacToeEngine = function engine() {
    let engine = {
        currPlayer: "X",
        scoreTie: 0,
        scorePlayerO: 0,
        scorePlayerX: 0,
        gameFinished: false,
    }
    function updateScore(player) {
        if (player === "X") {
            engine.scorePlayerX++;
        } else {
            engine.scorePlayerO++;
        }
    }
    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }
    engine.checkForWin = function checkForWin(squares, player) {
        // Check rows
        for (let i = 0; i < 9; i += 3) {
            if (squares[i].textContent === player &&
                squares[i + 1].textContent === player &&
                squares[i + 2].textContent === player) {
                engine.gameFinished = true;
                updateScore(player)
                return [squares[i], squares[i + 1], squares[i + 2]];
            }
        }
        // Check columns
        for (let i = 0; i < 3; i++) {
            if (squares[i].textContent === player &&
                squares[i + 3].textContent === player &&
                squares[i + 6].textContent === player) {
                engine.gameFinished = true;
                updateScore(player)
                return [squares[i], squares[i + 3], squares[i + 6]];
            }
        }
        // Check diagonals
        if (squares[0].textContent === player &&
            squares[4].textContent === player &&
            squares[8].textContent === player) {
            engine.gameFinished = true;
            updateScore(player)
            return [squares[0], squares[4], squares[8]];
        }
        if (squares[2].textContent === player &&
            squares[4].textContent === player &&
            squares[6].textContent === player) {
            engine.gameFinished = true;

            updateScore(player)
            return [squares[2], squares[4], squares[6]];
        }
        return null;
    }
    engine.checkForDraw = function checkForDraw(squares) {
        for (const square of squares) {
            if (square.textContent === "") {
                return false;
            }
        }
        engine.gameFinished = true;
        engine.scoreTie++;
        return true;
    }
    engine.nextPlayer = function nextPlayer() {
        if (engine.currPlayer === "X") {
            engine.currPlayer = "O";
        } else {
            engine.currPlayer = "X";
        }

        return this.currPlayer;
    }
    engine.softReset = function softReset() {
        engine.currPlayer = "X";
        engine.gameFinished = false;
    }
    engine.fullReset = function fullReset() {
        engine.softReset()
        engine.scoreTie = 0;
        engine.scorePlayerO = 0;
        engine.scorePlayerX = 0;
    }
    
    engine.computerPlay = async function randomPlay(squares) {
        let emptySquares = [];
        for (let i = 0; i < squares.length; i++) {
            if (squares[i].textContent === "") {
                emptySquares.push(squares[i]);
            }
        }
        let randomSquareIndex = Math.floor(Math.random() * emptySquares.length);
        emptySquares[randomSquareIndex].textContent = engine.currPlayer;
    }


    return engine;
} 
