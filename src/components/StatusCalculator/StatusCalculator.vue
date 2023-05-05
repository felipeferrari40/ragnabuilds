<template>
  <div class="flex grid grid-cols-3">
    <div>
      <form>
        <div><input type="number" placeholder="STR" v-model="data.STR" min="1" max="130"><span></span><span
            v-if="data.bless || data.sticks || data.foods">+ {{ data.blessBonus + data.sticksBonus + data.foodsBonus
            }}</span></div>
        <div><input type="number" placeholder="AGI" v-model="data.AGI" min="1" max="130"><span>{{ }}</span><span
            v-if="data.sticks || data.foods">+ {{ data.sticksBonus + data.foodsBonus }}</span></div>
        <div><input type="number" placeholder="VIT" v-model="data.VIT" min="1" max="130"><span>{{ }}</span><span
            v-if="data.sticks || data.foods">+ {{ data.sticksBonus + data.foodsBonus }}</span></div>
        <div><input type="number" placeholder="INT" v-model="data.INT" min="1" max="130"><span>{{ }}</span><span
            v-if="data.bless || data.sticks || data.foods">+ {{ data.blessBonus + data.sticksBonus + data.foodsBonus
            }}</span></div>
        <div><input type="number" placeholder="DEX" v-model="data.DEX" min="1" max="130"><span>{{ }}</span><span
            v-if="data.bless || data.sticks || data.foods">+ {{ data.blessBonus + data.sticksBonus + data.foodsBonus
            }}</span></div>
        <div><input type="number" placeholder="LUK" v-model="data.LUK" min="1" max="130"><span>{{ }}</span><span
            v-if="data.sticks || data.foods">+ {{ data.sticksBonus + data.foodsBonus }}</span></div>
      </form>
    </div>
    <div class="grid">
    <form>
      <div><label>Palito</label><input class="mx-3" id="sticks" type="checkbox" @change="sticksUp()"
          v-model="data.sticks"></div>
      <div><label>Comida</label><input class="mx-3" id="foods" type="checkbox" @change="foodsUp()" v-model="data.foods">
      </div>
      <div><label>Bless</label><input class="mx-3" id="bless" type="checkbox" @change="blessUp()" v-model="data.bless">
      </div>
      <div class="w-full">
        <p>Classe : {{ selected }} </p><br/>
        <select class="w-42" v-model="selected">
          <option value="">Selecionar Classe</option>
          <option v-for="charClass in charClasses" :key="charClass.id" :value='charClass.name'>{{ charClass.name }}
          </option>
        </select>
      </div>
    </form>
    </div>
    <div>
      <h1 class="w-full"> IC: {{ varibleCast }}</h1>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue';

const charClasses = ref([
  { name: 'Rune Knight', id: 1 },
  { name: 'Guillotine Cross', id: 2 },
  { name: 'Arch Bishop', id: 3 },
  { name: 'Ranger', id: 4 },
  { name: 'Warlock', id: 5 },
  { name: 'Mechanic', id: 6 },
  { name: 'Royal Guard', id: 7 },
  { name: 'Shadow Chaser', id: 8 },
  { name: 'Shura', id: 9 },
  { name: 'Maestro', id: 10 },
  { name: 'Wanderer', id: 11 },
  { name: 'Sorcerer', id: 12 },
  { name: 'Geneticist', id: 13 },
  { name: 'Rebelion', id: 14 },
  { name: 'Kagerou/Oboro', id: 15 },
  { name: 'Soul Reaper', id: 16 },
  { name: 'Star Emperor', id: 17 }
])

const selected = ref('')

const data = reactive({
  STR: null,
  AGI: null,
  VIT: null,
  DEX: null,
  INT: null,
  LUK: null,
  sticks: false,
  sticksBonus: 0,
  foods: false,
  foodsBonus: 0,
  bless: false,
  blessBonus: 0,
})

function sticksUp() {
  if (data.sticks == false) {
    data.sticksBonus = 0
  } else {
    data.sticksBonus = 15
  }
}

function foodsUp() {
  if (data.foods == false) {
    data.foodsBonus = 0
  } else {
    data.foodsBonus = 20
  }
}

function blessUp() {
  if (data.bless == false) {
    data.blessBonus = 0
  } else {
    data.blessBonus = 10
  }
}

//let foodsUp = 20
//let blessUp = 10

const varibleCast = computed(
  () => Math.round(((2 * ((data.DEX || 1) + data.sticksBonus + data.foodsBonus + data.blessBonus) + ((data.INT || 1) + data.sticksBonus + data.foodsBonus + data.blessBonus))))
)

</script>


<style>
form div {
  margin: 5px;
  padding: 5px;
  text-align: start;
}</style>