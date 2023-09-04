<template>
  <div>
    测试管用吗 {{ num }} 
    <button @click="num += 1">+1</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import a from '@qf/a'
a()

const num = ref(1)

</script>