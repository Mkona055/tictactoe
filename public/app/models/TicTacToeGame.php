<?php

namespace TicTacToe;

class TicTacToeGame{

    public $id;
    public $currPlayer = "X";
    public $scoreTie = 0 ;
    public $scorePlayerO = 0; 
    public $scorePlayerX = 0;
    public $gameFinished = false;
    public $gameBoard = [
        null, null , null , 
        null, null , null , 
        null, null , null];

    function __construct(){
        $this->id = uniqid();
    }

    function play($value, $index) {
        $this->gameBoard[$index] = $value;
    }
    function updateScore($player) {
        if ($player === "X") {
            $this->scorePlayerX++;
        } else {
            $this->scorePlayerO++;
        }
    }

    function checkForWin($player) {
        // Check rows
        for ($i = 0; $i < 9; $i += 3) {
            if ($this->gameBoard[$i] === $player &&
                $this->gameBoard[$i + 1] === $player &&
                $this->gameBoard[$i + 2] === $player) {
                $this->gameFinished = true;
                $this->updateScore($player);
                return [$i, $i + 1, $i + 2];
            }
        }
        // Check columns
        for ($i = 0; $i < 3; $i++) {
            if ($this->gameBoard[$i] === $player &&
                $this->gameBoard[$i + 3] === $player &&
                $this->gameBoard[$i + 6] === $player) {
                $this->gameFinished = true;
                $this->updateScore($player);
                return [$i, $i + 3, $i + 6];
            }
        }
        // Check diagonals
        if ($this->gameBoard[0] === $player &&
            $this->gameBoard[4] === $player &&
            $this->gameBoard[8] === $player) {
            $this->gameFinished = true;
            $this->updateScore($player);
            return [0, 4, 8];
        }
        if ($this->gameBoard[2] === $player &&
            $this->gameBoard[4] === $player &&
            $this->gameBoard[6] === $player) {
            $this->gameFinished = true;
            $this->updateScore($player);
            return [2, 4, 6];
        }
        return null;
    }
    function checkForDraw() {

        for ($i = 0; $i < 9; $i++) {
            if ($this->gameBoard[$i] === null) {
                $this->gameFinished = false;
                return false;
            }
        }
        $this->gameFinished = true;
        $this->scoreTie++;
        return true;

    }
    function nextPlayer() {
        if ($this->currPlayer === "X") {
            $this->currPlayer = "O";
        } else {
            $this->currPlayer = "X";
        }

        return $this->currPlayer;
    }

    function softReset() {
        $this->currPlayer = "X";
        $this->gameFinished = false;
        $this->gameBoard = [
            null, null , null , 
            null, null , null , 
            null, null , null];
    }
    function fullReset() {
        $this->softReset();
        $this->scoreTie = 0;
        $this->scorePlayerO = 0;
        $this->scorePlayerX = 0;
    }
    
    function computerPlay() {
        $availablePlaces = [];
        for ($i = 0; $i < count($this->gameBoard); $i++) {
            if ($this->gameBoard[$i] === null) {
                $availablePlaces[] = $i;
            }
        }
        $randomSquareIndex = rand(0, count($availablePlaces) - 1);
        $computerPlayIndex = $availablePlaces[$randomSquareIndex];
        $this->gameBoard[$computerPlayIndex] = "O";
        return $computerPlayIndex;
    }

    function toJSON() {
        return [
          "id" => $this->id,
          "board" => $this->gameBoard,
          "scoreTie" => $this->scoreTie,
          "scorePlayerO" => $this->scorePlayerO,
          "scorePlayerX" => $this->scorePlayerX,
          "gameFinished" => $this->gameFinished,
          "currPlayer" => $this->currPlayer
        ];
      }
    
    function toEncodedJSON() {
        return json_encode($this->toJSON());
    }
    
} 