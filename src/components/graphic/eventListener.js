import * as three from 'three'

import objectManager from './objectManager'

import store from '../../store/index'

let eventListener = {
  state: {
    clicked: false,
    moving: false,
    moved: false,
    wheel: false,
  },
  mouse: new three.Vector2(),
  offset: {
    x: 0,
    y: 0,
    z: 0,
  },
  raycaster: new three.Raycaster(),
  setIntersects (arr) {
    if (arr.length !== 0)
      this.focus(arr[0].object)
    else
      this.blur()
    this.state.clicked = false
  },
  setMousePosition (x, y) {
    this.mouse.x = x
    this.mouse.y = y
  },
  setMouseOffset (x, y) {
    this.offset.x = this.mouse.x - x
    this.offset.y = this.mouse.y - y
    if (this.offset.x !== 0 || this.offset.y !== 0)
      this.state.moved = true
  },
  setWheelOffset (offset) {
    this.offset.z += offset
  },
  focus (target) {
    while (target.type !== 'Group')
      target = target.parent
    console.log(target)
    if (target.userData.props !== undefined) {
      store.dispatch('setFocused', target.userData.props)
      objectManager.objects.controlPanel.position.y = -window.innerHeight / window.devicePixelRatio * 2.54 / 10000 / 10 * 3.75
    }
  },
  blur () {
    objectManager.objects.controlPanel.position.y = -5
    if (objectManager.objects.controlPanel.clildren !== undefined)
      for (let child of objectManager.objects.controlPanel.clildren)
        child.dispose()
  },
  mouseEvent: {
    mousedown (event) {
      eventListener.setMousePosition(
        (event.clientX / window.innerWidth) * 2 - 1,
        (event.clientY / window.innerHeight) * (-2) + 1
      )
      eventListener.state.moving = true
    },
    mousemove (event) {
      if (eventListener.state.moving) {
        eventListener.setMouseOffset(
          (event.clientX / window.innerWidth) * 2 - 1,
          (event.clientY / window.innerHeight) * (-2) + 1
        )
        eventListener.setMousePosition(
          (event.clientX / window.innerWidth) * 2 - 1,
          (event.clientY / window.innerHeight) * (-2) + 1
        )
      }
    },
    mouseup (event) {
      if (!eventListener.state.moved)
        eventListener.state.clicked = true
      eventListener.state.moving = false
      eventListener.state.moved = false
    },
    wheel (event) {
      eventListener.setWheelOffset(event.deltaY)
      eventListener.state.wheel = true
    },
  },
}

for (let e in eventListener.mouseEvent)
  window.addEventListener(e, eventListener.mouseEvent[e])

export default eventListener
