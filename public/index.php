<?php
    require_once('_config.php');
?>

<!DOCTYPE html>
<html>

  <head>
    <title>Tic Tac Toe</title>
    <link rel="stylesheet" type="text/css" href="styles/style.css">
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
    <script src="/scripts/jquery.min.js"></script>
    <script src="scripts/engine.js"></script>
    <script src="scripts/game.js"></script>

  </head>

  <body>

    <header class="scores">
      <div>
        <label for="scoreplayerX">PLAYER (X)</label>
        <span class="scoreValue" id="scorePlayerX">0</span>
      </div>
      <div>
        <label for="scoreTie">TIE</label>
        <span class="scoreValue" id="scoreTie">0</span>
      </div>
      <div>
        <label for="scoreplayerO" id="labelPlayerO">PLAYER (O)</label>
        <span class="scoreValue" id="scorePlayerO">0</span>
      </div>
      <div>
        <span id="gameMode">2P</span>
      </div>
      <div >
        <span ><img id="restartButton" src="assets/restart.svg"></span>
      </div>
    </header>
    <table id="board">
      <tr>
        <td class="square no-left-border no-top-border "></td>
        <td class="square no-top-border"></td>
        <td class="square no-right-border no-top-border"></td>
      </tr>
      <tr>
        <td class="square no-left-border"></td>
        <td class="square"></td>
        <td class="square no-right-border"></td>
      </tr>
      <tr>
        <td class="square no-left-border no-bottom-border"></td>
        <td class="square no-bottom-border"></td>
        <td class="square no-right-border no-bottom-border"></td>
      </tr>
    </table>

    <div id="myModal" class="modal">

      <div class="modal-content">
        <span class="close">&times;</span>
        <p id="modal-text">TIE !</p>
      </div>
    
    </div>
  </body>


</html>