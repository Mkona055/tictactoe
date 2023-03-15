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

    function addBoard($value, $index) {
        $this->gameBoard[$index] = $value;
    }

    public function toJSON() {
        return [
          "id" => $this->id,
          "board" => $this->gameBoard,
          "scoreTie" => $this->scoreTie,
          "scorePlayerO" => $this->scorePlayerO,
          "scorePlayerX" => $this->scorePlayerX,
          "gameFinished" => $this->gameFinished
        ];
      }
    
    public function toEncodedJSON() {
        return json_encode($this->toJSON());
      
    
    }
    
} 

?>