import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    objects: {
      object: [
        {
          type: 'tree',
          size: 1,
          coord: [0, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [1, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [2, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [3, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [4, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [5, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [6, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [7, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [8, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [9, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [10, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [11, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [12, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [13, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [14, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [15, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [16, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [17, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [18, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [19, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [20, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [21, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [22, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [23, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [24, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [25, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [26, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [27, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [28, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [29, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [30, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [31, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [32, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [33, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [34, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [35, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [0, 1],
        },
        {
          type: 'tree',
          size: 1,
          coord: [0, 2],
        },
        {
          type: 'tree',
          size: 1,
          coord: [0, 3],
        },
        {
          type: 'tree',
          size: 1,
          coord: [0, 4],
        },
        {
          type: 'tree',
          size: 1,
          coord: [0, 5],
        },
        {
          type: 'tree',
          size: 1,
          coord: [0, 6],
        },
        {
          type: 'tree',
          size: 1,
          coord: [0, 7],
        },
        {
          type: 'tree',
          size: 1,
          coord: [0, 8],
        },
        {
          type: 'tree',
          size: 1,
          coord: [0, 9],
        },
        {
          type: 'tree',
          size: 1,
          coord: [0, 10],
        },
        {
          type: 'tree',
          size: 1,
          coord: [0, 11],
        },
        {
          type: 'tree',
          size: 1,
          coord: [0, 12],
        },
        {
          type: 'tree',
          size: 1,
          coord: [0, 13],
        },
        {
          type: 'tree',
          size: 1,
          coord: [0, 14],
        },
        {
          type: 'tree',
          size: 1,
          coord: [0, 15],
        },
        {
          type: 'tree',
          size: 1,
          coord: [0, 16],
        },
        {
          type: 'tree',
          size: 1,
          coord: [0, 17],
        },
        {
          type: 'tree',
          size: 1,
          coord: [0, 18],
        },
        {
          type: 'tree',
          size: 1,
          coord: [0, 19],
        },
        {
          type: 'tree',
          size: 1,
          coord: [0, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [1, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [2, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [3, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [4, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [5, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [6, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [7, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [8, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [9, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [10, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [11, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [12, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [13, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [14, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [15, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [16, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [17, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [18, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [19, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [20, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [21, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [22, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [23, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [24, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [25, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [26, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [27, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [28, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [29, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [30, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [31, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [32, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [33, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [34, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [35, 20],
        },
        {
          type: 'tree',
          size: 1,
          coord: [36, 0],
        },
        {
          type: 'tree',
          size: 1,
          coord: [36, 1],
        },
        {
          type: 'tree',
          size: 1,
          coord: [36, 2],
        },
        {
          type: 'tree',
          size: 1,
          coord: [36, 3],
        },
        {
          type: 'tree',
          size: 1,
          coord: [36, 4],
        },
        {
          type: 'tree',
          size: 1,
          coord: [36, 5],
        },
        {
          type: 'tree',
          size: 1,
          coord: [36, 6],
        },
        {
          type: 'tree',
          size: 1,
          coord: [36, 7],
        },
        {
          type: 'tree',
          size: 1,
          coord: [36, 8],
        },
        {
          type: 'tree',
          size: 1,
          coord: [36, 9],
        },
        {
          type: 'tree',
          size: 1,
          coord: [36, 10],
        },
        {
          type: 'tree',
          size: 1,
          coord: [36, 11],
        },
        {
          type: 'tree',
          size: 1,
          coord: [36, 12],
        },
        {
          type: 'tree',
          size: 1,
          coord: [36, 13],
        },
        {
          type: 'tree',
          size: 1,
          coord: [36, 14],
        },
        {
          type: 'tree',
          size: 1,
          coord: [36, 15],
        },
        {
          type: 'tree',
          size: 1,
          coord: [36, 16],
        },
        {
          type: 'tree',
          size: 1,
          coord: [36, 17],
        },
        {
          type: 'tree',
          size: 1,
          coord: [36, 18],
        },
        {
          type: 'tree',
          size: 1,
          coord: [36, 19],
        },
        {
          type: 'tree',
          size: 1,
          coord: [36, 20],
        }
      ],
      building: {
        1: {
          id: 1,
          coord: [3, 10],
          side: 'left',
          type: 'castle',
          size: 2,
          level: 1,
          hp: 100,
          action: ['barack'],
        },
        2: {
          id: 2,
          coord: [30, 10],
          side: 'right',
          type: 'castle',
          size: 2,
          level: 1,
          hp: 100,
          action: ['barack'],
        },
      },
      unit: {},
    },
    unitParams: {
      warrior1: {
        type: 'warrior',
        level: 1,
        size: 0.5,
        hp: 10,
        speed: 1,
        damage: 1,
        attackSpeed: 10,
        range: 0.3,
      },
    },
    buildingParams: {
      castle1: {
        type: 'castle',
        level: 1,
        size: 2,
        hp: 100,
        action: ['barack'],
      },
      barack1: {
        type: 'barack',
        level: 1,
        size: 1,
        hp: 30,
        canCreate: true,
        unitSpeed: 6,
        action: ['warrior'],
        price: 10,
      },
    },
    focused: {},
  },
  actions: {
    ...actions,
  },
  getters: {
    ...getters,
  },
  mutations: {
    ...mutations,
  },
})
