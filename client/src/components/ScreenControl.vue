<template>
  <div>
    <a-row>
      <a-col>
      </a-col>
    </a-row>
    <data-control type="screen" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DataControl from './DataControl.vue'

export default Vue.extend({
  components: {
    DataControl
  }  
})
</script>
