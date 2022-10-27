import { createStore } from "vuex";
import { checkForWinner, createBoard } from "./utils";

const initState = {
   moves: 0,
   board: createBoard(),
   nextPlayer: "X" as "X" | "O",
   gameOver: false,
   alert: false,
   message: null as string | null,
   winningCells: null as number[] | null,
};

const store = createStore({
   state() {
      return initState;
   },
   mutations: {
      play(state, { location }: { location: number }) {
         if (state.moves <= 9) {
            state.moves++;
            state.board[location] = state.nextPlayer;
            state.nextPlayer = state.nextPlayer === "O" ? "X" : "O";

            const hasWon = checkForWinner(state.board);
            if (hasWon) {
               state.winningCells = hasWon;
               store.dispatch("end-game");
            } else if (state.moves === 9) {
               store.dispatch("end-game");
            }
         }
      },
      restart(state) {
         state.moves = 0;
         state.alert = false;
         state.board = createBoard();
         state.message = null;
         state.nextPlayer = "X";
         state.gameOver = false;
         state.winningCells = null;
      },
      "game-over"(state) {
         state.gameOver = true;
      },
      "open-alert"(state, payload: { message: string }) {
         state.alert = true;
         state.message = payload.message;
      },
      "close-alert"(state) {
         state.alert = false;
         state.message = null;
      },
   },
   actions: {
      "end-game"({ commit }) {
         commit("game-over");
         commit("open-alert", { message: "Game Over" });
         setTimeout(() => {
            commit("close-alert");
         }, 1000);
      },
   },
});

export type AppStore = typeof store;

export default store;
