
window.onload = () => {
    const squares = document.querySelectorAll('.square');
    const gameMode = document.querySelector('#gameMode');
    const restart = document.querySelector('#restartButton');
    var engine = TicTacToeEngine();

    for (const square of squares) {
        square.addEventListener('click', function () {
            player = engine.currPlayer;
            if (square.textContent === "" && !engine.gameFinished) {
                square.textContent = player;
                if (!gameHasFinished(squares, player)) {
                    if (gameMode.textContent === "1P" && player === "X") {
                        player = engine.nextPlayer();
                        engine.computerPlay(squares);
                        const winningCombination = engine.checkForWin(squares, player)
                        if (winningCombination) {
                            document.querySelector("#scorePlayerX").textContent = engine.scorePlayerX;
                            document.querySelector("#scorePlayerO").textContent = engine.scorePlayerO;
                            displayResult(winningCombination);
                        } else if (engine.checkForDraw(squares)) {
                            document.querySelector("#scoreTie").textContent = engine.scoreTie;
                            displayResult();
                        }
                    }
                    engine.nextPlayer();


                }
            } else if (engine.gameFinished) {
                softReset();
            }
        });
    }

    gameMode.addEventListener('click', function () {
        toggleMode();
        fullReset();
    });
    restart.addEventListener('click', function () {
        fullReset();
    });

    function gameHasFinished(squares, player) {
        const winningCombination = engine.checkForWin(squares, player)
        if (winningCombination) {
            document.querySelector("#scorePlayerX").textContent = engine.scorePlayerX;
            document.querySelector("#scorePlayerO").textContent = engine.scorePlayerO;
            displayResult(winningCombination);
            return true;
        } else if (engine.checkForDraw(squares)) {
            document.querySelector("#scoreTie").textContent = engine.scoreTie;
            return true;
        }
        return false;
    }
    function toggleMode() {
        if (gameMode.textContent == "2P") {
            gameMode.textContent = "1P";
            document.querySelector("#labelPlayerO").textContent = "COMPUTER (O)";
        } else {
            gameMode.textContent = "2P";
            document.querySelector("#labelPlayerO").textContent = "PLAYER (O)";

        }
    }
    function softReset() {

        for (const square of squares) {
            square.textContent = "";
            square.style.color = "white";
        }
        engine.softReset();

    }
    function fullReset() {
        for (const square of squares) {
            square.textContent = "";
            square.style.color = "white";
        };
        engine.fullReset();
        document.querySelector("#scorePlayerX").textContent = engine.scorePlayerX;
        document.querySelector("#scorePlayerO").textContent = engine.scorePlayerO;
        document.querySelector("#scoreTie").textContent = engine.scoreTie;
    }
    function displayResult(winningCombination) {

        for (let i = 0; i < winningCombination.length; i++) {
            winningCombination[i].style.color = "yellow";
        }
    }
}
