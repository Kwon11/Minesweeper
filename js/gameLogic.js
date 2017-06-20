function handleLeftClick(element) {
  if (element.className === 'Flipped') {
    console.log('flipped');
    return;
  }
  let rawCoordinate = element.id, coordinate = {};
  let x = rawCoordinate.indexOf('x'), y = rawCoordinate.indexOf('y');
  coordinate.y = parseInt(rawCoordinate.slice(y + 1, x)); //to INT
  coordinate.x = parseInt(rawCoordinate.slice(x+1));
  console.log('coordinate', coordinate);
  let activeValue = currentBoard.board[coordinate.y][coordinate.x].value;
  //if its a bomb, alert ('game over')

  if (activeValue === 'bomb') {
    alert('game lost!')
  } else if (activeValue !== 0){
    element.setAttribute('class', 'Flipped');
    element.innerHTML = activeValue;
  } else if (activeValue === 0 ) {
    element.setAttribute('class', 'Flipped');
    if (coordinate.x > 0) {
      handleLeftClick(document.getElementById(`y${coordinate.y}x${coordinate.x - 1}`));
    }
    if (coordinate.y > 0) {
      handleLeftClick(document.getElementById(`y${coordinate.y - 1}x${coordinate.x}`));
    }
    if (coordinate.x + 1 < currentBoard.settings.width) {
      handleLeftClick(document.getElementById(`y${coordinate.y}x${coordinate.x + 1}`));
    }
    if (coordinate.y + 1 < currentBoard.settings.height) {
      handleLeftClick(document.getElementById(`y${coordinate.y + 1}x${coordinate.x}`));
    }
    //calll this recursively on NESW element
    //
  } else {
    console.log('something wrong');
  }
  //currentBoard.board
}