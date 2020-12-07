<template>
  <div id="container"></div>
</template>

<script>
import world from './graphic/index'

export default {
  name: 'Main',
  mounted () {
    world.init()
    this.$el.appendChild(world.$el)
    world.start()
  },
}
</script>

<style lang="sass">
$cell-size: 32

canvas
  display: block

.break
  position: absolute

.size05
  width: 0.5 * $cell-size + 0px
  height: 0.5 * $cell-size + 0px

.size1
  width: $cell-size + 0px
  height: $cell-size + 0px

.size15
  width: 1.5 * $cell-size + 0px
  height: 1.5 * $cell-size + 0px

.size2
  width: 2 * $cell-size + 0px
  height: 2 * $cell-size + 0px

#container
  width: 100%
  height: 100%
  background: url('/img/green_texture.jpg')
</style>
