<template>
  <div class="home grid grid-cols-2 flex justify-center">
    <div class="container">
      <BuildCalculator />
    </div>
    <div class="container">
      <StatusCalculator />
    </div>
  </div>
</template>

<script>

import BuildCalculator from '@/components/BuildCalculator/'
import StatusCalculator from '@/components/StatusCalculator/StatusCalculator.vue'

export default {
  components: {
    BuildCalculator,
    StatusCalculator
  }
}

</script>
