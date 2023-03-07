
window.onload = () => {
    const squares = document.querySelectorAll('.square');
    const gameMode = document.querySelector('#gameMode');
    const restart = document.querySelector('#restartButton');
    const modal = document.querySelector('#myModal');
    const modalText = document.querySelector('#modal-text');
    const close = document.querySelector('.close');


    var engine = TicTacToeEngine();

    for (const square of squares) {
        square.addEventListener('click', function () {
            player = engine.currPlayer;   // get NextPlayer
            if (square.textContent === "" && !engine.gameFinished) {
                square.textContent = player;
                if (!gameHasFinished(squares, player)) {
                    if (gameMode.textContent === "1P" && player === "X") {
                        player = engine.nextPlayer();
                        engine.computerPlay(squares);
                        gameHasFinished(squares, player);
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
            
            displayResult(winningCombination);
            return true;
        } else if (engine.checkForDraw(squares)) {
            console.log(displayResult());
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
        console.log(winningCombination);
        if (winningCombination){
            document.querySelector("#scorePlayerX").textContent = engine.scorePlayerX;
            document.querySelector("#scorePlayerO").textContent = engine.scorePlayerO;
            modalText.textContent = `${winningCombination[0].textContent} WON !`;
            console.log(modalText.textContent);
            for (let i = 0; i < winningCombination.length; i++) {
                winningCombination[i].style.color = "yellow";
            }
        }else{
            document.querySelector("#scoreTie").textContent = engine.scoreTie;
            modalText.textContent = `TIE !`;
        }
        modal.style.display = "block";
    }

    window.onclick = function(event) {
        if (event.target == modal || event.target == close) {
          modal.style.display = "none";
        }
      }
}
