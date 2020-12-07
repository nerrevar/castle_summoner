export const getObject = state => state.objects.object
export const getBuilding = state => state.objects.building
export const getUnit = state => state.objects.unit

export const getObjectType = state => objectType => {
  if (['warrior'].includes(objectType))
    return 'unit'
  if (['castle', 'barack'].includes(objectType))
    return 'building'
  console.log(objectType)
  throw new Error('Invalid object type')
}

export const getObjectParams = state => data => {
  if (getObjectType(state)(data.type) === 'unit')
    return state.unitParams[data.type + data.level]
  if (getObjectType(state)(data.type) === 'building')
    return state.buildingParams[data.type + data.level]
  throw new Error('Invalid object params')
}
export const getUnitParams = state => unitName => state.unitParams[unitName]
export const getBuildingParams = state => buildingName => state.buildingParams[buildingName]
export const getMaxHp = state => data => {
  if (data.type === undefined)
    return 0
  if (getObjectType(state)(data.type) === 'unit')
    return state.unitParams[`${data.type}${data.level}`].hp
  if (getObjectType(state)(data.type) === 'building')
    return state.buildingParams[`${data.type}${data.level}`].hp
  throw new Error('Invalid unit type in MaxHp')
}

export const getFocused = state => state.focused

export const getObjectAvatar = state => data => `/img/${getObjectType(state)(data.type || 'castle')}/${data.type}${data.level}.svg`
