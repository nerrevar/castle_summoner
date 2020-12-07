<template>
  <div
    class="break unit"
    :class="getClass"
    :style="{ top: obj.coord[1] * $CELL_SIZE + 'px', left: obj.coord[0] * $CELL_SIZE + 'px' }"
    @click="setFocused(obj)"
  >
    <Hp
      :size="obj.size"
      :current="obj.hp"
      :max="getUnitParams(`${this.obj.type}${this.obj.level}`).hp"
    ></Hp>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Hp from '../other/hp'

export default {
  name: 'Unit',
  props: ['obj'],
  components: {Hp},
  computed: {
    ...mapGetters(['getUnitParams']),
    getClass () {
      if (!['warrior1'].includes(`${this.obj.type}${this.obj.level}`))
        throw new Error('Invalid unit type!')
      if (![0.5, 1, 1.5, 2].includes(this.obj.size))
        throw new Error('Invalid unit size!')
      return [`${this.obj.type}${this.obj.level}`, 'size' + this.obj.size.toString().replace('.', '')]
    },
  },
  methods: {
    ...mapActions(['updateUnitPosition', 'hit', 'destroy', 'setFocused', 'changeDirection']),
    move () {
      let x = 0
      let y = 0
      let canMove = false
      switch (this.obj.direction) {
        case this.$DIRECTION_UP_LEFT: {
          x -= this.halfSpeed / 10
          y -= this.halfSpeed / 10
          if (
            !document.elementFromPoint(
              (this.obj.coord[0] - this.obj.speed / 10) * this.$CELL_SIZE,
              (this.obj.coord[1] - this.obj.speed / 10) * this.$CELL_SIZE
            ).classList.contains('break')
          )
            canMove = true
          break
        }
        case this.$DIRECTION_UP: {
          y -= this.obj.speed / 10
          if (
            !document.elementFromPoint(
              this.obj.coord[0] * this.$CELL_SIZE,
              (this.obj.coord[1] - this.obj.speed / 10) * this.$CELL_SIZE
            ).classList.contains('break')
          )
            canMove = true
          break
        }
        case this.$DIRECTION_UP_RIGHT: {
          x += this.halfSpeed / 10
          y -= this.halfSpeed / 10
          if (
            !document.elementFromPoint(
              (this.obj.coord[0] + this.obj.size + this.obj.speed / 10) * this.$CELL_SIZE,
              (this.obj.coord[1] - this.obj.speed / 10) * this.$CELL_SIZE
            ).classList.contains('break')
          )
            canMove = true
          break
        }
        case this.$DIRECTION_RIGHT: {
          x += this.obj.speed / 10
          if (
            !document.elementFromPoint(
              (this.obj.coord[0] + this.obj.size + this.obj.speed / 10) * this.$CELL_SIZE,
              this.obj.coord[1] * this.$CELL_SIZE
            ).classList.contains('break')
          )
            canMove = true
          break
        }
        case this.$DIRECTION_DOWN_RIGHT: {
          x += this.halfSpeed / 10
          y += this.halfSpeed / 10
          if (
            !document.elementFromPoint(
              (this.obj.coord[0] + this.obj.size + this.obj.speed / 10) * this.$CELL_SIZE,
              (this.obj.coord[1] + this.obj.size + this.obj.speed / 10) * this.$CELL_SIZE
            ).classList.contains('break')
          )
            canMove = true
          break
        }
        case this.$DIRECTION_DOWN: {
          y += this.obj.speed / 10
          if (
            !document.elementFromPoint(
              this.obj.coord[0] * this.$CELL_SIZE,
              (this.obj.coord[1] + this.obj.size + this.obj.speed / 10) * this.$CELL_SIZE
            ).classList.contains('break')
          )
            canMove = true
          break
        }
        case this.$DIRECTION_DOWN_LEFT: {
          x -= this.halfSpeed / 10
          y += this.halfSpeed / 10
          if (
            !document.elementFromPoint(
              (this.obj.coord[0] - this.obj.speed / 10) * this.$CELL_SIZE,
              (this.obj.coord[1] + this.obj.size + this.obj.speed / 10) * this.$CELL_SIZE
            ).classList.contains('break')
          )
            canMove = true
          break
        }
        case this.$DIRECTION_LEFT: {
          x -= this.obj.speed / 10
          if (
            !document.elementFromPoint(
              (this.obj.coord[0] - this.obj.speed / 10) * this.$CELL_SIZE,
              this.obj.coord[1] * this.$CELL_SIZE
            ).classList.contains('break')
          )
            canMove = true
          break
        }
        default: console.error('Unknown unit direction')
      }

      let target = this.enemyInRange()
      if (!target) {
        this.checkDirection()
        if (canMove) {
          this.updateUnitPosition({unit: this.obj, x: x, y: y})
          this.$forceUpdate()
        }
        else
          // TODO check if ally in forward
          if (this.obj.direction < 8)
            this.changeDirection({unit: this.obj, direction: this.obj.direction + 1})
          else
            this.changeDirection({unit: this.obj, direction: 1})
      }
      else {
        if (this.obj.canAttack)
          this.attack(target)
      }
    },
    enemyInRange () {
      for (let target of this.$parent.$children.filter(c => ['Unit', 'Building'].includes(c.$options.name)))
        if (target.obj.side !== this.obj.side)
          if (
            Math.sqrt(
              Math.pow((target.obj.coord[0] + target.obj.size / 2) - (this.obj.coord[0] + this.obj.size / 2), 2) +
              Math.pow((target.obj.coord[1] + target.obj.size / 2) - (this.obj.coord[1] + this.obj.size / 2), 2)
            ) <= this.obj.range + (target.obj.size + this.obj.size) / 2
          )
            return target.obj
      return false
    },
    checkDirection () {
      let range = Number.MAX_SAFE_INTEGER
      let targetObj = {}
      // TODO check if no enemy
      for (let target of this.$parent.$children.filter(c => ['Unit', 'Building'].includes(c.$options.name)))
        if (target.obj.side !== this.obj.side) {
          let tmpRange = Math.sqrt(
            Math.pow((target.obj.coord[0] + target.obj.size / 2) - (this.obj.coord[0] + this.obj.size / 2), 2) +
            Math.pow((target.obj.coord[1] + target.obj.size / 2) - (this.obj.coord[1] + this.obj.size / 2), 2)
          )
          if (tmpRange <= range) {
            range = tmpRange
            targetObj = target.obj
          }
        }
      if (Object.keys(targetObj).length === 0)
        return
      let diffX = (this.obj.coord[0] + this.obj.size / 2) - (targetObj.coord[0] + targetObj.size / 2)
      let diffY = (this.obj.coord[1] + this.obj.size / 2) - (targetObj.coord[1] + targetObj.size / 2)
      if (Math.abs(diffY) <= 0.5)
        this.changeDirection({unit: this.obj, direction: diffX > 0 ? this.$DIRECTION_LEFT : this.$DIRECTION_RIGHT})
      else
        if (diffY > 0)
          if (Math.abs(diffX) <= 0.5)
            this.changeDirection({unit: this.obj, direction: this.$DIRECTION_UP})
          else
            this.changeDirection({unit: this.obj, direction: diffX > 0 ? this.$DIRECTION_UP_LEFT : this.$DIRECTION_UP_RIGHT})
        else
          if (Math.abs(diffX) <= 0.5)
            this.changeDirection({unit: this.obj, direction: this.$DIRECTION_DOWN})
          else
            this.changeDirection({unit: this.obj, direction: diffX > 0 ? this.$DIRECTION_DOWN_LEFT : this.$DIRECTION_DOWN_RIGHT})
    },
    attack (target) {
      this.hit({target: target, damage: this.obj.damage})
      this.obj.canAttack = false
      setTimeout(
        () => {
          this.obj.canAttack = true
        },
        10000 / this.obj.attackSpeed
      )
    },
  },
  watch: {
    'obj.hp': function (value) {
      if (value <= 0)
        this.destroy(this.obj)
    },
  },
  created () {
    this.halfSpeed = Math.sqrt(Math.pow(this.obj.speed, 2) / 2)
  },
}
</script>

<style lang="sass" scoped>
.warrior1
  background: url('/img/unit/warrior1.svg')
  background-size: 100% 100%
</style>
