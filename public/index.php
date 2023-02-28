<?php

require_once('_config.php');

use TicTacToe\TicTacToeEngine;

$engine = new TicTacToeEngine();


$squares = ["X", "X", "X", 
            "O", "O", "X ", 
            "O" ,"X ","O"];

echo "BOARD <br><br>";
for ($i = 0 ; $i < sizeof($squares) ; $i = $i + 3){
    echo "{$squares[$i]} {$squares[$i+1]} {$squares[$i+2]}<br>";
}
$player = "X";
echo "PLAYER: {$player}<br><br>";

$checkForWin = $engine->checkForWin($squares, $player);
$checkForWinString = implode(" ",$checkForWin);

echo "WINNING INDEXES: <br>";
echo "checkForWin : {$checkForWinString }";


?>