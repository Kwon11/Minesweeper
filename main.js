console.log('ok?');

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

function handleLeftClick(element) {
  console.log('clicked', element);
}

function generateBoard () {
  //return the matrix
  var newBoard = [];
  for (let y = 0; y < currentBoard.settings.height; y++) {
    newBoard.push([]);
    for (let x = 0; x < currentBoard.settings.width; x++) {
      newBoard[y].push({value: null, mark: null})
    }
  }

  for (let z = 0; z < currentBoard.settings.bombs; z++) {
    let added = false;
    while (!added) {
      let newCoordinate = randomCoordinates();
      if (newBoard[newCoordinate.y][newCoordinate.x].value !== 'bomb') {
        newBoard[newCoordinate.y][newCoordinate.x].value = 'bomb';
        added = true;
      }
    }
  }

  for (let y = 0; y < currentBoard.settings.height; y++) {
    for (let x = 0; x < currentBoard.settings.width; x++) {
      newBoard[y][x].value = calculateValue(y, x, newBoard);
    }
  }


  return newBoard;
}

function calculateValue(y, x, board) {
  //check the 9 surrounding squares. if bomb, value++
  //return value;
  if (board[y][x].value === 'bomb') {
    return 'bomb';
  }

  let value = 0;
  
  for (let i = -1; i < 2; i ++) {
    for (let j = -1; j < 2; j ++) {

      if (i !== 0 || j !== 0) { //if they're both 0, skip

        if (y + i >= 0 && y + i < currentBoard.settings.height && x + j >= 0 && x + j < currentBoard.settings.width) { //if its in bounds
          if (board[y + i][x + j].value === 'bomb') { //and its a bomb
            value++;
          }
        }
      }

    }
  }
  return value;

}

function randomCoordinates() {
  let coordinate = {};
  coordinate.x = Math.floor(Math.random() * currentBoard.settings.width);
  coordinate.y = Math.floor(Math.random() * currentBoard.settings.height);
  return coordinate;
}

function renderBoard () {
  console.log('render', currentBoard.board);
  
  let board = document.getElementById("board")
  while (board.hasChildNodes()) {
    board.removeChild(board.lastChild);
  }
  for (let y = 0; y < currentBoard.settings.height; y++) {
    let tr = document.createElement('tr');
    tr.setAttribute('id', y)
    tr.setAttribute('class', 'BoardRow')
    board.appendChild(tr);
    for (let x = 0; x < currentBoard.settings.width; x++) {
      let td = document.createElement('td');
      var coordinateId = 'y' + y + 'x' + x;
      td.setAttribute('id', coordinateId);
      td.setAttribute('class', 'Cell');
      td.setAttribute('onclick', 'handleLeftClick(this)')
      tr.appendChild(td);
    }
  }

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