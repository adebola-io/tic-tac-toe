import { createStore } from "vuex";

type Board = Array<"X" | "O" | "">[];
const store = createStore({
   state() {
      return {
         moves: 0,
         board: [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
         ] as Board,
         nextPlayer: "X" as "X" | "O",
      };
   },
   mutations: {
      play(state, { location }: { location: [number, number] }) {
         state.moves++;
         state.board[location[0]][location[1]] = state.nextPlayer;
         state.nextPlayer = state.nextPlayer === "O" ? "X" : "O";
      },
   },
});

export type AppStore = typeof store;

export default store;
