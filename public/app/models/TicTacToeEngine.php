<?php

namespace TicTacToe;

class TicTacToeEngine{

    
    public $currPlayer = "X";
    public $scoreTie = 0 ;
    public $scorePlayerO = 0; 
    public $scorePlayerX = 0;
    public $gameFinished = false;
    
    function updateScore($player) {
        if ($player === "X") {
            $this->scorePlayerX += 1;
        } else {
            $scorePlayerO++;
        }
    }

    function checkForWin($squares, $player) {
        // Check rows
        for ($i = 0; $i < 9; $i += 3) {
            if ($squares[$i] === $player &&
                $squares[$i + 1] === $player &&
                $squares[$i + 2] === $player) {
                $gameFinished = true;
                $this->updateScore($player);
                return [$i, $i + 1, $i + 2];
            }
        }
        // Check columns
        for ($i = 0; $i < 3; $i++) {
            if ($squares[$i] === $player &&
                $squares[$i + 3] === $player &&
                $squares[$i + 6] === $player) {
                $gameFinished = true;
                updateScore($player);
                return [$i, $i + 3, $i + 6];
            }
        }
        // Check diagonals
        if ($squares[0] === $player &&
            $squares[4] === $player &&
            $squares[8] === $player) {
            $gameFinished = true;
            updateScore($player);
            return [0, 4, 8];
        }
        if ($squares[2] === $player &&
            $squares[4] === $player &&
            $squares[6] === $player) {
            $gameFinished = true;

            updateScore($player);
            return [2, 4, 6];
        }
        return null;
    }
    // function checkForDraw($squares) {
    //     for ($square : $squares) {
    //         if (square.textContent === "") {
    //             return false;
    //         }
    //     }
    //     engine.gameFinished = true;
    //     engine.scoreTie++;
    //     return true;
    // }
    // engine.nextPlayer = function nextPlayer() {
    //     if (engine.currPlayer === "X") {
    //         engine.currPlayer = "O";
    //     } else {
    //         engine.currPlayer = "X";
    //     }

    //     return this.currPlayer;
    // }
    // engine.softReset = function softReset() {
    //     engine.currPlayer = "X";
    //     engine.gameFinished = false;
    // }
    // engine.fullReset = function fullReset() {
    //     engine.softReset()
    //     engine.scoreTie = 0;
    //     engine.scorePlayerO = 0;
    //     engine.scorePlayerX = 0;
    // }
    
    // engine.computerPlay = async function randomPlay(squares) {
    //     let emptySquares = [];
    //     for (let i = 0; i < squares.length; i++) {
    //         if (squares[i].textContent === "") {
    //             emptySquares.push(squares[i]);
    //         }
    //     }
    //     let randomSquareIndex = Math.floor(Math.random() * emptySquares.length);
    //     emptySquares[randomSquareIndex].textContent = engine.currPlayer;
    // }


    // return engine;
} 

?>