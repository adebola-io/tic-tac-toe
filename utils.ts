export type Board = Array<"X" | "O" | undefined>;

export function createBoard(): Board {
   return [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
   ];
}

/** The winning alignments on the board array. */
const winners = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8], // Horizontals
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8], // Verticals
   [0, 4, 8],
   [6, 4, 2], // Diagonals
];

/**
 * Checks the board to see if there is a winning alignment.
 * Its not the best algorithm, but I dont really care. This is a tictactoe game.
 * @param board The board to check.
 * @returns Either the winning alignment, if there is any, or `false`, if there is none.
 */
export function checkForWinner(board: Board): number[] | false {
   for (let i = 0; i < winners.length; i++) {
      if (board[winners[i][0]] === undefined) continue;
      if (
         board[winners[i][0]] === board[winners[i][1]] &&
         board[winners[i][1]] === board[winners[i][2]]
      )
         return winners[i];
   }
   return false;
}
