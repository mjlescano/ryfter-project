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
