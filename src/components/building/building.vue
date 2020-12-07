<template>
  <div
    class="break building"
    :class="getClass"
    :style="{ top: obj.coord[1] * $CELL_SIZE + 'px', left: obj.coord[0] * $CELL_SIZE + 'px' }"
    @click="setFocused(obj)"
  >
    <Hp
      :size="obj.size"
      :current="obj.hp"
      :max="getMaxHp({type: this.obj.type, level: this.obj.level})"
    ></Hp>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Hp from '../other/hp'

export default {
  name: 'Building',
  props: ['obj'],
  components: {
    Hp,
  },
  computed: {
    ...mapGetters(['getObjectParams', 'getMaxHp']),
    getClass () {
      if (!['castle', 'barack'].includes(this.obj.type))
        throw new Error('Invalid building type!')
      if (![1, 2].includes(this.obj.size))
        throw new Error('Invalid building size')
      return [this.obj.type, 'size' + this.obj.size]
    },
  },
  methods: {
    ...mapActions(['createObject', 'destroy', 'setFocused']),
    createUnit () {
      if (this.obj.canCreate) {
        this.createObject({
          source: this.obj,
          target: this.getObjectParams({type: this.obj.action[0], level: this.obj.level})
        })
        this.obj.canCreate = false
        setTimeout(
          () => {
            this.obj.canCreate = true
          },
          60000 / this.obj.unitSpeed
        )
      }
    }
  },
  watch: {
    'obj.hp': function (value) {
      if (value <= 0)
        this.destroy(this.obj)
    },
  },
}
</script>

<style lang="sass" scoped>
.castle
  background: url('/img/building/castle.svg')
  background-size: 100% 100%

.barack
  background: url('/img/building/barack.svg')
  background-size: 100% 100%
</style>
