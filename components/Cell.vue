<script setup lang="ts">
import { computed, watch } from "vue";
import { useStore } from "vuex";
import { AppStore } from "../store";

const store = useStore<AppStore["state"]>();
const props = defineProps<{
      cellNumber: number;
      value: "X" | "O" | null;
   }>(),
   wasClicked = computed(
      () => store.state.board[props.cellNumber] !== undefined
   ),
   winningCell = computed(
      () => store.state.winningCells?.includes(props.cellNumber) ?? false
   );

function play() {
   if (!wasClicked.value && !store.state.gameOver) {
      store.commit({
         type: "play",
         location: props.cellNumber,
      });
   }
}
</script>

<template>
   <div @click="play" :class="{ winningCell }">
      <template v-if="value === 'X'">
         <div class="x"></div>
      </template>
      <template v-else-if="value === 'O'">
         <div class="o"></div>
      </template>
   </div>
</template>

<style scoped lang="scss">
$color1: #26286c;
$color2: #10679a;
.winningCell {
   $color: #2ce0c8;
   background-color: $color;
   &:hover {
      background-color: $color;
      transform: none;
   }
}
.o {
   height: 60%;
   aspect-ratio: 1;
   width: auto;
   background-color: transparent;
   border: 6px solid $color1;
   border-radius: 50%;
   animation: o-render 300ms;
   @media (max-width: 639px) {
      height: 50%;
   }
}
.x {
   position: relative;
   height: 100%;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   &::before,
   &::after {
      position: absolute;
      display: block;
      content: "";
      height: 60%;
      width: 6px;
      background-color: $color2;
   }
   &::before {
      transform: rotate(45deg);
      animation: x-before 350ms;
   }
   &::after {
      transform: rotate(-45deg);
      animation: x-after 350ms;
   }
}
</style>
