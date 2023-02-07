var TicTacToeEngine =  function engine(){
    let engine = {currPlayer: "X"}
    engine.checkForWin = function checkForWin(squares, player) {
        // Check rows
        for (let i = 0; i < 9; i += 3) {
            if (squares[i].textContent === player &&
                squares[i + 1].textContent === player &&
                squares[i + 2].textContent === player) {
                return true;
            }
        }
        // Check columns
        for (let i = 0; i < 3; i++) {
            if (squares[i].textContent === player &&
                squares[i + 3].textContent === player &&
                squares[i + 6].textContent === player) {
                return true;
            }
        }
        // Check diagonals
        if (squares[0].textContent === player &&
            squares[4].textContent === player &&
            squares[8].textContent === player) {
            return true;
        }
        if (squares[2].textContent === player &&
            squares[4].textContent === player &&
            squares[6].textContent === player) {
            return true;
        }
        return false;
    }
    engine.checkForDraw = function checkForDraw(squares) {
        for (const square of squares) {
            if (square.textContent === "") {
                return false;
            }
        }
        return true;
    }
    engine.nextPlayer = function nextPlayer() {
        if (engine.currPlayer === "X") {
            engine.currPlayer = "O";
        }else{
            engine.currPlayer = "X";
        }

        return this.currPlayer ;
    }
    return engine;
} 
