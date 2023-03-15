<?php

require_once('_config.php');
use TicTacToe\TicTacToeEngine;
use TicTacToe\TicTacToeGame;
session_start();


switch ($_GET["action"] ?? "version") {
case "/new":
    $game = new TicTacToeGame();
    $data = $game->toEncodedJSON();
    $_SESSION["game"] = $game;
    break;
case "/nextPlayer":
    $data = $_SESSION["game"]->toEncodedJSON();

    break;
default:
    $data = ["version" => "1.0"];
}

header("Content-Type: application/json");
echo $data;

?>