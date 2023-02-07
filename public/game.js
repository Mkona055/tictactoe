window.onload = () => {
    const squares = document.querySelectorAll('.square');
    let player = "X";
    var engine = TicTacToeEngine();

    for (const square of squares) {
        square.addEventListener('click', function () {
            if (square.textContent === "") {
                square.textContent = player;
                if (engine.checkForWin(squares,player)) {
                    alert(player + " wins!");
                    reset();
                } else if (engine.checkForDraw(squares,player)) {
                    alert("Draw!");
                    reset();
                } else {
                    player = engine.nextPlayer();
                }
            }
        });
    }
}
