<template>
  <div
    class="panel"
    v-if="getFocused"
  >
    <div class="avatar_wrapper">
      <span class="name">{{ `${getFocused.type}${getFocused.level}` }}</span>
      <img
        class="avatar"
        :src="getObjectAvatar({type: getFocused.type, level: getFocused.level})"
        alt="av"
      />
    </div>
    <div class="stat">
      <p>Уровень: {{ getFocused.level || 0 }}</p>
      <p>Жизнь: {{ getFocused.hp || 0 }}/{{ getMaxHp({type: getFocused.type, level: getFocused.level}) }}</p>
      <p>Скорость передвижения: {{ getFocused.speed || 'Не двигается' }}</p>
      <p>Атака: {{ getFocused.damage || 'Без атаки' }}</p>
      <p>Скорость атаки: {{ getFocused.attackSpeed || 'Без атаки' }}</p>
      <p>Дальность атаки: {{ getFocused.range || 'Без атаки' }}</p>
    </div>
    <div class="action_panel">
      <ActionButton
        class="action"
        v-for="(object, index) in getFocused.action"
        :key="'action' + index"
        :action="Object.assign(
          {},
          getObjectParams({type: object, level: getFocused.level}),
          {
            side: getFocused.side,
            coord: getFocused.coord,
          }
        )"
      ></ActionButton>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import ActionButton from './action.button'

export default {
  name: 'ControlPanel',
  components: {
    ActionButton,
  },
  computed: mapGetters(['getFocused', 'getObjectAvatar', 'getMaxHp', 'getObjectParams']),
  methods: mapActions(['createUnit']),
  watch: {
    'getFocused.hp': function (value) {
      if (value <= 0)
        this.setFocused({})
    },
  },
}
</script>

<style lang="sass" scoped>
$CELL_SIZE: 32
.panel
  position: absolute
  left: 0
  right: 0
  bottom: 0
  height: 7 * $CELL_SIZE + 0px
  display: flex
  flex: 1 0
  flex-flow: row nowrap
  background: url('/img/panel/panel_back.jpg')
  color: wheat
  *
    display: flex
    flex: 1 0
    flex-flow: column nowrap

.avatar
  width: 6 * $CELL_SIZE + 0px
  height: 6 * $CELL_SIZE + 0px

.action_panel
  flex: 0 0 8 * $CELL_SIZE + 0px
  flex-flow: row wrap
  align-items: flex-start
</style>
