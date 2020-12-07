import * as three from 'three'

let geometry = new three.PlaneBufferGeometry(
  window.innerWidth / window.devicePixelRatio * 2.54 / 10000 * 0.95,
  window.innerHeight / window.devicePixelRatio * 2.54 / 10000 * 0.2
)
let texture = new three.TextureLoader().load('/img/panel/panel_back.jpg')
let material = new three.MeshLambertMaterial({map: texture})
let controlPanel = new three.Mesh(geometry, material)
controlPanel.position.z = -0.15
controlPanel.position.y = -5

export default controlPanel
