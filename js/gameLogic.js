function handleLeftClick(element) {
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
  } else {
    console.log('something wrong');
  }
  //currentBoard.board
}