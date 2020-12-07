// import store from './index'

let $CELL_SIZE = 32

export const createObject = ({commit, getters}, data) => {
  let additionParams = {}
  if (data.source.side === 'left')
    additionParams = {
      coord: [data.source.coord[0] + data.source.size, data.source.coord[1]],
      direction: 4,
    }
  if (data.source.side === 'right')
    additionParams = {
      coord: [
        data.source.coord[0] - getters.getObjectParams(
          {type: data.target.type, level: data.source.level}
        ).size,
        data.source.coord[1]
      ],
      direction: 8,
    }
  let target = Object.assign({}, data.target, additionParams, {
    side: data.source.side,
    id: Date.now().toString().slice(-4),
  })
  let canCreate = !document.elementFromPoint(
    target.coord[0] * $CELL_SIZE, target.coord[1] * $CELL_SIZE
  ).classList.contains('break')
  while (!canCreate) {
    // TODO check map size
    target.coord = [target.coord[0], target.coord[1] + 0.5]
    canCreate = !document.elementFromPoint(
      target.coord[0] * $CELL_SIZE, target.coord[1] * $CELL_SIZE
    ).classList.contains('break')
  }
  if (target.damage !== undefined)
    target.canAttack = true
  if (getters.getObjectType(target.type) === 'unit')
    commit('createUnit', target)
  if (getters.getObjectType(target.type) === 'building')
    commit('createBuilding', target)
}

export const updateUnitPosition = ({commit}, data) => commit('updateUnitPosition', data)

export const hit = ({commit, getters}, data) => {
  commit('hit', {
    type: getters.getObjectType(data.target.type),
    id: data.target.id,
    value: data.target.hp - data.damage,
  })
}

export const destroy = ({commit, getters}, target) => {
  commit('destroy', {
    type: getters.getObjectType(target.type),
    id: target.id,
  })
}

export const setFocused = ({commit, getters}, focused) => commit('setFocused', focused)

export const changeDirection = ({commit}, data) => commit('changeDirection', data)
