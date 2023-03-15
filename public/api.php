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
case "/updateScore":
    $player = $_GET["player"];
    $data = $_SESSION["game"]->updateScore($player);
    $data = json_encode(["res" => "Done"]);

    break;
case "/checkForWin":
    $player = $_GET["player"];
    $data = $_SESSION["game"]->checkForWin($player);
    $data = json_encode(["res" => $data]);
    break;
case "/checkForDraw":
    $data = $_SESSION["game"]->checkForDraw();
    $data = json_encode(["res" => $data]);

    break;
case "/nextPlayer":
    $data = $_SESSION["game"]->nextPlayer();
    $data = json_encode(["res" => $data]);
    break;
case "/softReset":
    $data = $_SESSION["game"]->softReset();
    $data = json_encode(["res" => "Done"]);

    break;
case "/fullReset":
    $data = $_SESSION["game"]->fullReset();
    $data = json_encode(["res" => "Done"]);

    break;
case "/computerPlay":
    $data = $_SESSION["game"]->computerPlay();
    $data = json_encode(["res" => $data]);
    break;
case "/play":
    $player = $_GET["player"];
    $position = $_GET["position"];
    $data = $_SESSION["game"]->play($player, $position);
    $data = json_encode(["res" => "Done"]);

    break;
case "/gameState":
    $data = $_SESSION["game"]->toEncodedJSON();
    break;
default:
    $data = ["error" => "404"];
}

header("Content-Type: application/json");
echo $data;

?>