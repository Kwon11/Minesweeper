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