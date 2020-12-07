<template>
  <div
    class="button"
    @click="createObject({
      source: action,
      target: getObjectParams({type: action.type, level: action.level}),
    })"
  >
    <img
      :src="getObjectAvatar({type: action.type, level: action.level})"
      alt="av"
    />
    <div class="price">{{ action.price }}</div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'ActionButton',
  props: ['action'],
  computed: mapGetters(['getObjectAvatar', 'getObjectParams']),
  methods: mapActions(['createObject']),
}
</script>

<style lang="sass" scoped>
$CELL_SIZE: 32
$FONT_SIZE: 14
.button
  flex: 0 0!important
  width: 2 * $CELL_SIZE + 0px
  height: 2* $CELL_SIZE + 0px

img
  margin: $CELL_SIZE / 4 + 0px
  width: 2 * $CELL_SIZE + 0px
  height: 2 * $CELL_SIZE + 0px

.price
  position: relative
  top: -$FONT_SIZE - 2px - $CELL_SIZE / 4 + 0px
  left: $CELL_SIZE / 4 + 0px
  max-height: $FONT_SIZE + 2px
  display: flex
  flex: 0 0 100%
  justify-content: center
  *
    display: flex
    flex: 0 1
</style>
