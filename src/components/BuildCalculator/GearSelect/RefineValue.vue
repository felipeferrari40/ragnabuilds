<template>
  <select v-model="refino">
    <option v-for="(refino, i) in refined" :key="i">+{{refino}}</option>
  </select>
</template>

<script setup>

const range = (start, end, length = end ) =>
  Array.from({ length }, (_, i) => start + i)

const refined = range(1,14)

</script>

<style>

</style>