console.log('ok?');

function gameSizeClick (size) {
  console.log('changed to', size);
}

function newGame () {
  console.log('new game');
}
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