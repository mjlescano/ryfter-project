export const addSection = (data) => ({
  type: 'ADD_ITEM',
  payload: {
    kind: 'section'
  }
})

export const moveItem = ({ oldIndex, newIndex }) => ({
  type: 'MOVE_ITEM',
  payload: { oldIndex, newIndex }
})

export const grabItem = ({ index }) => ({
  type: 'GRAB_ITEM',
  payload: { index }
})

export const selectItem = ({ id }) => ({
  type: 'SELECT_ITEM',
  payload: { id }
})

export const updateItem = (data) => ({
  type: 'UPDATE_ITEM',
  payload: data
})
