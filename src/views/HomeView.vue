<template>
  <div class="home">
    <BuildCalculator/>
    <StatusCalculator/>
  </div>
</template>

<script>

import BuildCalculator from '@/components/BuildCalculator/'
import StatusCalculator from '@/components/StatusCalculator/'

export default{
  components:{
    BuildCalculator,
    StatusCalculator
  }
}

</script>
