<template>
  <div></div>
</template>

<script>
import { defineComponent } from 'vue'
import axios from '@/utils/axios'
export default defineComponent({
  setup() {
    axios
      .get('/users/XPoet')
      .then((res) => {
        console.log('res', res)
      })
      .catch((res) => {
        console.log('err', err)
      })
    return {}
  }
})
</script>

<style lang="stylus" scoped></style>
