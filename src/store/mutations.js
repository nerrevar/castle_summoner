import Vue from 'vue'

export const createUnit = (state, unit) => Vue.set(state.objects.unit, unit.id, unit)

export const updateUnitPosition = (state, data) =>
  Vue.set(state.objects.unit[data.unit.id], 'coord', [data.unit.coord[0] + data.x, data.unit.coord[1] + data.y])

export const hit = (state, data) => Vue.set(state.objects[data.type][data.id], 'hp', data.value)

export const destroy = (state, data) => Vue.delete(state.objects[data.type], data.id)

export const setFocused = (state, focused) => Vue.set(state, 'focused', focused)

export const changeDirection = (state, data) => Vue.set(state.objects.unit[data.unit.id], 'direction', data.direction)

export const createBuilding = (state, building) => Vue.set(state.objects.building, building.id, building)
