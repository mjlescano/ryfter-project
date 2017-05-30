import shortid from 'shortid'
import { arrayMove } from 'react-sortable-hoc'

const initialState = []

const reducers = {
  ADD_ITEM: (state, { payload }) => ([
    ...state.map((item) => {
      if (!item.selected) return item
      return { ...item, selected: false }
    }),
    {
      selected: true,
      ...payload,
      id: shortid.generate()
    }
  ]),

  MOVE_ITEM: (state, { payload: { oldIndex, newIndex } }) => {
    const items = arrayMove(state, oldIndex, newIndex)
    const item = items[newIndex]
    items[newIndex] = { ...item, grabbed: false }
    return items
  },

  GRAB_ITEM: (state, { payload: { index } }) => state.map((item, i) => {
    if (index !== i) return item
    return { ...item, grabbed: true }
  }),

  SELECT_ITEM: (state, { payload: { id } }) => state.map((item, i) => {
    if (item.id !== id) {
      if (item.selected) return { ...item, selected: false }
      return item
    }

    return { ...item, selected: true }
  })
}

export default (state = initialState, action) => {
  if (reducers[action.type]) {
    return reducers[action.type](state, action)
  } else {
    return state
  }
}
