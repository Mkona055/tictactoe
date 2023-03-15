
window.onload = () => {
    const squares = document.querySelectorAll('.square');
    const gameMode = document.querySelector('#gameMode');
    const restart = document.querySelector('#restartButton');
    const modal = document.querySelector('#myModal');
    const modalText = document.querySelector('#modal-text');
    const close = document.querySelector('.close');
    var engine = TicTacToeEngine();
    engine.initGame();

    for (let i = 0; i < squares.length; i++) {
        let square = squares[i];
        square.addEventListener('click', function () {
            player = engine.gameState["currPlayer"];   
            if (square.textContent === "" && !engine.gameState["gameFinished"]) {
                engine.play(squares, player, i)
                gameHasFinished(squares, player).then((result) => {
                    if (result !== true) {
                        if (gameMode.textContent === "1P" && player === "X") {
                            engine.computerPlay(squares);
                            gameHasFinished(squares, "O");
                        }else{
                            engine.nextPlayer();
                        }
                        

                    }
                });

            } else if (engine.gameState["gameFinished"]) {
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

        return engine.checkForWin(squares, player).then(data => {
            const res = data.res;
            if (data.res != null){
                const winningCombination = [squares[res[0]], squares[res[1]], squares[res[2]]]  ; 
                engine.updateGameState().then(() => {
                    displayResult(winningCombination);
                })
                return true;
            }else  {
                return engine.checkForDraw(squares).then(data => {
                    const res = data.res;
                    if (res){
                        engine.updateGameState().then(() => {
                            displayResult();
                        })
                        return true;
                    }else{
                        return false;
                    }
                })

            }
        });
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
        engine.fullReset()
        engine.updateGameState().then(() =>{
            document.querySelector("#scorePlayerX").textContent = engine.gameState["scorePlayerX"];
            document.querySelector("#scorePlayerO").textContent = engine.gameState["scorePlayerO"];
            document.querySelector("#scoreTie").textContent = engine.gameState["scoreTie"];
        });

    }
    function displayResult(winningCombination) {
        if (winningCombination){
            document.querySelector("#scorePlayerX").textContent = engine.gameState["scorePlayerX"];
            document.querySelector("#scorePlayerO").textContent = engine.gameState["scorePlayerO"];
            modalText.textContent = `${winningCombination[0].textContent} WON !`;
            for (let i = 0; i < winningCombination.length; i++) {
                winningCombination[i].style.color = "yellow";
            }
        }else{
            document.querySelector("#scoreTie").textContent = engine.gameState["scoreTie"];
            modalText.textContent = `TIE !`;
        }
        modal.style.display = "block";
        engine.delay(2000).then(() => { modal.style.display = "none";});
    }

    window.onclick = function(event) {
        if (event.target == modal || event.target == close) {
          modal.style.display = "none";
        }
      }
}
