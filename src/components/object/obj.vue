<template>
  <div
    class="break obj"
    :class="getClass"
    :style="{ top: obj.coord[1] * $CELL_SIZE + 'px', left: obj.coord[0] * $CELL_SIZE + 'px' }"
  >
  </div>
</template>

<script>
export default {
  name: 'Obj',
  props: ['obj'],
  computed: {
    getClass () {
      if (!['tree'].includes(this.obj.type))
        throw new Error('Invalid object type!')
      if (![1, 2].includes(this.obj.size))
        throw new Error('Invalid object size')
      return [this.obj.type, 'size' + this.obj.size]
    },
  },
}
</script>

<style lang="sass" scoped>
.tree
  background: url('/img/object/tree.svg')
  background-size: 100% 100%
</style>
