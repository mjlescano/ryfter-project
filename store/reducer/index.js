import { combineReducers } from 'redux'
import user from './user'
import job from './job'
import company from './company'
import items from './items'

export default combineReducers({
  user,
  job,
  company,
  items
})
