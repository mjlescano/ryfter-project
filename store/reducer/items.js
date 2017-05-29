import shortid from 'shortid'

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
  ])
}

export default (state = initialState, action) => {
  if (reducers[action.type]) {
    return reducers[action.type](state, action)
  } else {
    return state
  }
}
