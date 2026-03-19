import { GameBoard } from "./GameBoard";
import { Player } from "./Player";

// Mocking terminal input for demonstration
async function playGame() {
  const board = new GameBoard();
  const players: Player[] = [
    { name: "Player 1", symbol: "X" },
    { name: "Player 2", symbol: "O" },
  ];

  let currentPlayerIndex = 0;
  let gameOver = false;

  console.log("Welcome to Tic-Tac-Toe: Diagonal Lock Edition!");

  while (!gameOver) {
    board.display();
    const currentPlayer = players[currentPlayerIndex];

    // In a real Node app, use 'readline' or 'prompt-sync' here
    console.log(
      `${currentPlayer.name}'s turn (${currentPlayer.symbol}). Enter coordinate (e.g., A1):`,
    );

    // Example input parsing logic:
    // const row = input[0].toUpperCase().charCodeAt(0) - 65; // A -> 0, B -> 1
    // const col = parseInt(input[1]) - 1;

    // Logic check (Example move A1)
    const move = board.isValidMove(0, 0, currentPlayer.symbol);

    if (move.valid) {
      board.makeMove(0, 0, currentPlayer.symbol);

      if (board.checkWin(currentPlayer.symbol)) {
        board.display();
        console.log(`Congratulations! ${currentPlayer.name} wins!`);
        gameOver = true;
      } else if (board.isFull()) {
        board.display();
        console.log("It's a draw!");
        gameOver = true;
      } else {
        currentPlayerIndex = 1 - currentPlayerIndex; // Switch turns
      }
    } else {
      console.log(`Error: ${move.error}`);
    }

    break; // Breaking loop for demonstration purposes
  }
}

playGame();
