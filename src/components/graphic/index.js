import * as three from 'three'

import objectManager from './objectManager'
import eventListener from './eventListener'

import map from './map'
import controlPanel from './controlPanel/controlPanel'

function animate () {
  if (eventListener.state.clicked) {
    eventListener.raycaster.setFromCamera(eventListener.mouse, world.camera)
    eventListener.setIntersects(eventListener.raycaster.intersectObjects(world.map.children, true))
  }
  if (eventListener.state.moving) {
    world.camera.position.x = world.camera.position.x + eventListener.offset.x * 10
    world.camera.position.y = world.camera.position.y + eventListener.offset.y * 10
    eventListener.offset.x = 0
    eventListener.offset.y = 0
  }
  if (eventListener.state.wheel) {
    world.camera.position.z = world.camera.position.z + eventListener.offset.z
    eventListener.offset.z = 0
    eventListener.state.wheel = false
  }
  for (let obj of objectManager.objectsToAdd.map) {
    console.log(obj.props)
    world.map.add(obj)
    objectManager.objects.onMap[obj.props.side][obj.props.type + obj.props.id] = obj
  }
  objectManager.objectsToAdd.map = []

  for (let obj in objectManager.objects.onMap.left)
    if (objectManager.objects.onMap.left[obj].props.type === 'unit')
      objectManager.objects.onMap.left[obj].action()

  world.renderer.render(world.scene, world.camera)
  requestAnimationFrame(animate)
}

let world = {
  renderer: new three.WebGLRenderer({antialias: true}),
  scene: new three.Scene(),
  eventListener: eventListener,
  objectManager: objectManager,
  init () {
    this.$el = this.renderer.domElement
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setPixelRatio(window.devicePixelRatio)

    this.camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 200)
    this.camera.position.z = 16
    this.camera.position.y = -5
    this.camera.lookAt(this.scene.position)
    this.scene.add(this.camera)

    this.light = new three.DirectionalLight(0xffffff, 1)
    this.light.position.set(10, -3, 80)
    this.scene.add(this.light)
  },
  addStartObjects () {
    this.map = map
    this.scene.add(this.map)
    objectManager.objects.map = map

    this.camera.add(controlPanel)
    this.objectManager.objects.controlPanel = controlPanel

    objectManager.createObject('castle', 1, 'left', [-20, 0, 0])
    objectManager.createObject('castle', 1, 'right', [20, 0, 0])
  },
  start: async function () {
    objectManager.init().then(() => {
      this.addStartObjects()
      objectManager.createObject('warrior', 1, 'left', [-20, 5, 0])
      requestAnimationFrame(animate)
    })
  },
}

export default world
