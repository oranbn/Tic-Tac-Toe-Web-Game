function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var ticHeader = document.querySelector("span");
function setHeaderColor() {
  ticHeader.style.color = getRandomColor();
}

setInterval(setHeaderColor, 500);

var squares = document.querySelectorAll("td");
var playerSelector = true;
var player1Score = 0;
var player2Score = 0;
var moves = 0;
var player1Header = document.querySelector('#player1');
var player2Header = document.querySelector('#player2');


for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function playerMove() {
      if(this.textContent === '' && playerSelector) {
        this.textContent = 'X';
        playerSelector = false;
        moves++;
        if(checkIfPlayerWin('X')) {
          player1Score++;
          player1Header.textContent = 'Player 1 Score: ' + player1Score;
          playerWin("Player 1 Wins!");
        }
      }
      else if(this.textContent === '' && !playerSelector) {
        this.textContent = 'O';
        playerSelector = true;
        moves++;
        if(checkIfPlayerWin('O')) {
          player2Score++;
          player2Header.textContent = 'Player 2 Score: ' + player2Score;
          playerWin("Player 2 Wins!");
        }
      }
      if(moves === 9) {
        alert("Its a draw!")
        clearBoard();
      }
  })
}

function playerWin(message) {
  clearBoard();
  alert(message);
  moves = 0;
}

function checkIfPlayerWin(playerSign) {
  return (squares[0].textContent === playerSign && squares[1].textContent === playerSign && squares[2].textContent === playerSign) ||
         (squares[3].textContent === playerSign && squares[4].textContent === playerSign && squares[5].textContent === playerSign) ||
         (squares[6].textContent === playerSign && squares[7].textContent === playerSign && squares[8].textContent === playerSign) ||
         (squares[0].textContent === playerSign && squares[3].textContent === playerSign && squares[6].textContent === playerSign) ||
         (squares[1].textContent === playerSign && squares[4].textContent === playerSign && squares[7].textContent === playerSign) ||
         (squares[2].textContent === playerSign && squares[5].textContent === playerSign && squares[8].textContent === playerSign) ||
         (squares[0].textContent === playerSign && squares[4].textContent === playerSign && squares[8].textContent === playerSign) ||
         (squares[2].textContent === playerSign && squares[4].textContent === playerSign && squares[6].textContent === playerSign)
}

function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
      squares[i].textContent = '';
  }
}

var restart = document.querySelector('#restart');
restart.addEventListener('click', function restartGame() {
  clearBoard();
  moves = 0;
  player1Score = 0;
  player2Score = 0;
  player1Header.textContent = 'Player 1 Score: ' + player1Score;
  player2Header.textContent = 'Player 2 Score: ' + player2Score;
})
