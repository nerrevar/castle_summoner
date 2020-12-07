import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'

import store from '../../store/index'

let objectManager = {
  objects: {
    onMap: {
      left: {},
      right: {},
    },
  },
  objectsToChange: [],
  objectsToAdd: {
    map: [],
    controlPanel: [],
  },
  objectsToRemove: [],
  models: {},
  init: async function () {
    let loader = new GLTFLoader()
    await loader.loadAsync('/graphic/castle.gltf').then(castleObj => {
      let castle = castleObj.scene
      castle.name = 'castle'
      this.models.castle1 = castle
    })
    await loader.loadAsync('/graphic/warrior.glb').then(warriorObj => {
      let warrior = warriorObj.scene
      warrior.name = 'warrior'
      this.models.warrior1 = warrior
    })
    return true
  },
  createObject (type, level, side, position) {
    this.objectsToAdd.map.push(this.defineAddition(this.models[type + level].clone(), type, level, side, position))
  },
  defineAddition (obj, type, level, side, position) {
    obj.state = {
      canAttack: true,
      enemyInRange: false,
      hp: 10,
      target: {},
      distance: 0,
    }
    obj.params = store.getters.getObjectParams({type: type, level: level})
    obj.props = {
      type: store.getters.getObjectType(type),
      side: side,
      id: obj.uuid,
    }
    obj.attack = function () {
      obj.target.recieveDamage()
      obj.state.canAttack = false
      setTimeout(
        () => {
          obj.state.canAttack = true
        },
        10000 / obj.params.attackSpeed
      )
    }
    obj.checkHp = function checkHp () {
      if (obj.state.hp <= 0)
        obj.die()
    }
    obj.checkTarget = function () {
      let targetArr = {}
      if (obj.props.side === 'left')
        targetArr = objectManager.objects.onMap.right
      else
        targetArr = objectManager.objects.onMap.left

      let distance = Number.MAX_SAFE_INTEGER
      for (let index in targetArr) {
        let target = targetArr[index]
        let targetDistance = Math.sqrt(
          Math.pow(this.position.x - target.position.x, 2) + Math.pow(this.position.y - target.position.y, 2)
        )
        if (targetDistance < distance) {
          distance = targetDistance
          obj.state.target = target
          obj.state.distance = targetDistance
          if (distance < this.props.range) {
            obj.state.enemyInRange = true
            return
          }
        }
      }
    }
    obj.die = function () {
      obj.dispose()
    }
    obj.recieveDamage = function (value) {
      obj.state.hp -= value
      obj.checkHp()
    }
    if (obj.props.type === 'building') { // Building specific
      obj.state.moving = true
      obj.action = function () {
        console.log('building')
      }
      obj.move = function move () {
        console.log('building move')
      }
    }
    else { // Unit specific
      obj.state.canMove = true
      obj.action = function () {
        if (obj.state.enemyInRange) {
          obj.attack()
          obj.state.enemyInRange = false
        }
        else {
          obj.checkTarget()
          obj.move()
        }
      }
      obj.move = function () {
        obj.rotation.z = Math.atan((this.position.x - this.state.target.position.x) / (this.position.y - this.state.target.position.y))
        obj.position.x += (this.state.target.position.x - this.position.x) * this.params.speed / 100 / this.state.distance
        obj.position.y += (this.state.target.position.y - this.position.y) * this.params.speed / 100 / this.state.distance
      }
    }

    obj.position.set(...position)
    if (side === 'left')
      obj.rotation.z = Math.PI / 2
    else
      obj.rotation.z = -Math.PI / 2
    if (type === 'castle')
      obj.state.moving = false
    return obj
  },
}
export default objectManager
