import * as three from 'three'

let geometry = new three.PlaneBufferGeometry(50, 20)
let texture = new three.TextureLoader().load('/img/green.jpg')
let material = new three.MeshLambertMaterial({map: texture})
let map = new three.Mesh(geometry, material)
map.name = 'map'

export default map
