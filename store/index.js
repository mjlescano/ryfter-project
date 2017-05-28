import nextConnectRedux from 'next-connect-redux'
import { createStore } from 'redux'
import reducer from './reducer'

export const initStore = (initialState) => {
  return createStore(reducer, initialState)
}

export const nextConnect = nextConnectRedux(initStore)
