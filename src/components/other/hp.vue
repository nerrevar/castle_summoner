<template>
  <div
    class="hp"
    :class="{getClass}"
  >
    <div
      class="current"
      :style="{width: current / max * 100 + '%'}"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'Hp',
  props: ['size', 'current', 'max'],
  computed: {
    getClass () {
      return 'size' + this.size
    },
  },
}
</script>

<style lang="sass" scoped>
.hp
  position: relative
  top: -7px
  left: 0
  height: 4px!important
  background: black

.current
  height: 100%
  background: lightgreen
</style>
