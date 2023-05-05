<template>
  <div class="home grid grid-cols-2 flex">
    <div class="container">
      <BuildCalculator />
    </div>
    <div class="container">
      <StatusCalculator />
      <bonus-display class="mt-10 mx-10"/>
    </div>

  </div>

</template>

<script>

import BuildCalculator from '@/components/BuildCalculator/BuildCalculator.vue'
import StatusCalculator from '@/components/StatusCalculator/StatusCalculator.vue'
import BonusDisplay from '../components/BonusDisplay/BonusDisplay.vue'

export default {
  components: {
    BuildCalculator,
    StatusCalculator,
    BonusDisplay
  }
}

</script>
