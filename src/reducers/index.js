import { combineReducers } from 'redux'
import navMenu  from './navMenu'
import liveMonitoring from './liveMonitoring'

export default combineReducers ({
  navMenu,
  liveMonitoring,
})