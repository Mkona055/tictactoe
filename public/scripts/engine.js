var TicTacToeEngine = function () {
    let engine = {
        gameState:{}
    }  
    engine.delay = function (time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }
    engine.updateGameState = function updateGameState() {
        return $.ajax({
            type: "GET",
            url: `/api.php?action=/gameState`,
            success: function(game) {
                engine.gameState = game;        
            }
        });
    }
    engine.initGame = function initGame() {
        $.ajax({
            type: "GET",
            url: `/api.php?action=/new`,
            success: function(game) {
                engine.gameState = game;        
            }
        });
    }
  
    engine.checkForWin = function checkForWin(squares, player) {
        return $.ajax({
            type: "GET",
            url: `/api.php?action=/checkForWin&player=${player}`,
            success: function(data) {        
                let result = data.res;
                if (result == null) {
                    return null;
                }
                return [squares[result[0]], squares[result[1]], squares[result[2]]]  ;     
            }
        });
    }
    engine.checkForDraw = function checkForDraw() {
        return $.ajax({
            type: "GET",
            url: `/api.php?action=/checkForDraw`,
            success: function(data) {
                return data.res    
            }
        });

    }
    engine.nextPlayer = function nextPlayer() {
        $.ajax({
            type: "GET",
            url: `/api.php?action=/nextPlayer`,
            success: function(data) {
                engine.updateGameState();
                return data.res    
            }
        });

    }
    engine.softReset = function softReset() {
        $.ajax({
            type: "GET",
            url: `/api.php?action=/softReset`,
            success: function(data) {
                engine.updateGameState();
            }
        });
    }
    engine.fullReset = function fullReset() {
        return $.ajax({
            type: "GET",
            url: `/api.php?action=/fullReset`,
            success: function(data) {
                engine.updateGameState();
            }
        });
    }
    
    engine.computerPlay =  function (squares) {
        $.ajax({
            type: "GET",
            url: `/api.php?action=/computerPlay`,
            success: function(data) {
                engine.updateGameState();
                squares[data.res].textContent = 'O';
            }
        });
    }
    engine.play =  function (squares, player, position) {
        $.ajax({
            type: "GET",
            url: `/api.php?action=/play&position=${position}&player=${player}`,
            success: function(data) {
                engine.updateGameState();
                squares[position].textContent = player;
            }
        });
    }


    return engine;
} 
