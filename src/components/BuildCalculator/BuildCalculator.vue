<template>
  <div>
    <div class="flex justify-center">
      <div class="mx-5 p-3 text-center">
        <gear-select msg="Topo" class="select" />
        <gear-select msg="Baixo" class="select" />
        <gear-select msg="Arma" class="select" />
        <gear-select msg="Capa" class="select" />
        <gear-select msg="AcessórioD" class="select" />
      </div>
      <div class="mx-5 p-3">
        <gear-select msg="Meio" class="select" />
        <gear-select msg="Armadura" class="select" />
        <gear-select msg="Escudo" class="select" />
        <gear-select msg="Bota" class="select" />
        <gear-select msg="AcessórioE" class="select" />
      </div>
    </div>
    <div class="mx-5 p-3">
      <img src="https://browiki.org/images/4/4f/Aprendizessprite.png" />
    </div>
    <div class="flex justify-center">
      <div class="mx-5 p-3 text-center">
        <gear-select msg="Visual" c />
        <gear-select msg="Visual" c />
        <gear-select msg="ShadowW" />
        <gear-select msg="Visual" />
        <gear-select msg="ShadowE" />
      </div>
      <div class="mx-5 p-3">
        <gear-select msg="Visual" />
        <gear-select msg="ShadowA" />
        <gear-select msg="ShadowS" />
        <gear-select msg="ShadowB" />
        <gear-select msg="ShadowN" />
      </div>
    </div>
  </div>
</template>

<script setup>
import GearSelect from "./GearSelect/GearSelect.vue";

import { defineProps } from "vue";

defineProps({
  msg: Image,
});
</script>

<style scoped>
</style>