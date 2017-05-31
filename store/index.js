import nextConnectRedux from 'next-connect-redux'
import { createStore } from 'redux'
import reducer from './reducer'

const devTools = (typeof window !== 'undefined' || undefined) &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()

export const initStore = (initialState) => {
  return createStore(reducer, initialState, devTools)
}

export const nextConnect = nextConnectRedux(initStore)

export const hasQuestions = (items) => {
  return items.find((item) => {
    return item.kind === 'question' && item.title
  }) !== undefined
}
