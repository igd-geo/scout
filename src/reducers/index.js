import { combineReducers } from 'redux'
import navMenu  from './navMenu'
import liveMonitoring from './liveMonitoring'
import settings from './settings'

export default combineReducers ({
  navMenu,
  liveMonitoring,
  settings,
})