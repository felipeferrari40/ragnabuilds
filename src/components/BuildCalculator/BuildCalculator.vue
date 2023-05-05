<template>
  <div class="flex justify-center" >
    <div class="mx-5 p-3 text-center" >
        <gear-select msg="Topo" class="select"/>
        <gear-select msg="Baixo" class="select"/>
        <gear-select msg="Arma" class="select"/>
        <gear-select msg="Capa" class="select"/>
        <gear-select msg="AcessórioD" class="select"/>
    </div>
    <div class="mx-5 p-3" >
      <!--{{ charClass.image }}-->
    </div>
    <div class="mx-5 p-3" >
      <gear-select msg="Meio" class="select"/>
      <gear-select msg="Armadura" class="select"/>
      <gear-select msg="Escudo" class="select"/>
      <gear-select msg="Bota" class="select"/>
      <gear-select msg="AcessórioE" class="select"/>
    </div>
  </div>
</template>

<script setup>
import GearSelect from './GearSelect/GearSelect.vue';

import { defineProps } from 'vue';

defineProps({
  msg: Image
})

</script>

<style scoped>

.select{
  display: block;
  padding: 5px;
  margin: 8px;
  width: 250px;
}

</style>