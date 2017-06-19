
var gameOptions = {
  small: {
    width: 8,
    height: 8,
    bombs: 10
  },
  medium: {
    width: 16,
    height: 16,
    bombs: 40
  },
  large: {
    width: 24,
    height: 24,
    bombs: 99
  }
}

var currentBoard = {
  settings: {
    width: 8,
    height: 8,
    bombs: 10
  },
  board: null
};


function gameSizeClick (size) {
  currentBoard.settings = gameOptions[size];
}

function newGame () {
  console.log('new game');
  currentBoard.board = generateBoard();
  renderBoard();
}

gameSizeClick('small');
newGame();
//generate a board
//square options
  //bomb
  //number
  //null
//array of array represents board
  //10 times, to assign bombs
    //random number x, random number y becomes bomb
  //go through matrix, for each non-bomb check around, count the bombs, assign the value
//render
  //for each array, <tr>
    //for each element, <td>
    //id is concat (x, y, value)



/*
Minesweeper

Presets 8x8 (10) 16x16 (40) 24x24 (99)
Timer
Reset button

Board:
Bombs
Adjacents
Nulls

Actions:
Click - flip or detonate
Right click - Mark Mark2
Double - if its number, and has flags, detonate all adjacent

Phases:
1. Make board (start game)
2. Handle Clicks, 
3. Bomb or all squares cleared - end state
*/