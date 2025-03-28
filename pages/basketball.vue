<script setup lang="ts">
const { audio, isPlaying, pause, currentTime, duration, seek } =
  useAudio("/basketball.wav");
</script>

<template>
  <main class="flex items-center justify-center gap-5">
    <button
      type="button"
      class="p-3 border rounded-xl bg-blue-500 text-white font-bold cursor-pointer"
      v-on:click="pause"
    >
      {{ isPlaying ? "Pause" : "Play" }}
    </button>
    <audio ref="audio" preload="auto" />
    <input
      type="range"
      class="w-full accent-blue-500"
      min="0"
      :max="duration"
      step="0.1"
      v-model="currentTime"
      @input="seek"
    />
  </main>
</template>
