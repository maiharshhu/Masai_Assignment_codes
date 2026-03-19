export class GameBoard {
  private grid: string[][];

  constructor() {
    this.grid = [
      ["_", "_", "_"], // Row A
      ["_", "_", "_"], // Row B
      ["_", "_", "_"], // Row C
    ];
  }

  display(): void {
    console.log("\n  1 2 3");
    const rowLabels = ["A", "B", "C"];
    this.grid.forEach((row, i) => {
      console.log(`${rowLabels[i]} ${row.join(" ")}`);
    });
  }

  isValidMove(
    row: number,
    col: number,
    playerSymbol: string,
  ): { valid: boolean; error?: string } {
    // Out of bounds check
    if (row < 0 || row > 2 || col < 0 || col > 2) {
      return { valid: false, error: "Invalid coordinate! Use A-C and 1-3." };
    }

    // Cell already occupied
    if (this.grid[row][col] !== "_") {
      return { valid: false, error: "Cell is already taken!" };
    }

    // Special Rule: Diagonal Lock (Center is B2 -> index [1][1])
    if (row === 1 && col === 1) {
      const opponentSymbol = playerSymbol === "X" ? "O" : "X"; // Simplified for logic

      const diag1Lock =
        this.grid[0][0] === opponentSymbol &&
        this.grid[2][2] === opponentSymbol;
      const diag2Lock =
        this.grid[0][2] === opponentSymbol &&
        this.grid[2][0] === opponentSymbol;

      if (diag1Lock || diag2Lock) {
        return {
          valid: false,
          error: "Diagonal Lock! You cannot claim the center.",
        };
      }
    }

    return { valid: true };
  }

  makeMove(row: number, col: number, symbol: string): void {
    this.grid[row][col] = symbol;
  }

  checkWin(s: string): boolean {
    // Rows & Columns
    for (let i = 0; i < 3; i++) {
      if (this.grid[i].every((cell) => cell === s)) return true;
      if (
        this.grid[0][i] === s &&
        this.grid[1][i] === s &&
        this.grid[2][i] === s
      )
        return true;
    }
    // Diagonals
    if (this.grid[0][0] === s && this.grid[1][1] === s && this.grid[2][2] === s)
      return true;
    if (this.grid[0][2] === s && this.grid[1][1] === s && this.grid[2][0] === s)
      return true;

    return false;
  }

  isFull(): boolean {
    return this.grid.every((row) => row.every((cell) => cell !== "_"));
  }
}
