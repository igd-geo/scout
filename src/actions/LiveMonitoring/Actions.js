import {
  START_LIVE_MONITORING,
  STOP_LIVE_MONITORING,
  ADD_BEAT_OBJECT,
  TOGGLE_BEAT_OBJECT_DIALOG,
  CHANGE_BEAT_HOST_INPUT,
  CLEAR_BEAT_OBJECTS,
  CHANGE_TAB_TO_SEARCH,
  CHANGE_TAB_TO_FILTER,
  CHANGE_TAB_TO_INFO,
  CHANGE_TAB_TO_SORT,
  CHANGE_TAB_TO_NOTHING_SELECTED,
  CHANGE_LOGLEVEL_VISIBILITY,
  CHANGE_LOGLEVEL_COLOR,
} from "./ActionTypes"

export const startLiveMonitoring = (onclickFunction) => ({
  type: START_LIVE_MONITORING,
  onclickFunction: onclickFunction,
})

export const stopLiveMonitoring = () => ({
  type: STOP_LIVE_MONITORING,
})

export const addBeatObject = (newBeatObject) => ({
  type: ADD_BEAT_OBJECT,
  newBeatObject: newBeatObject,
})

export const toggleBeatObjectDialog = (selectedIndex) => ({
  type: TOGGLE_BEAT_OBJECT_DIALOG,
  selectedIndex: selectedIndex,
})

export const changeBeatHostInput = (newBeatHostInput) => ({
  type: CHANGE_BEAT_HOST_INPUT,
  newBeatHostInput: newBeatHostInput,
})

export const clearBeatObjects = () => ({
  type: CLEAR_BEAT_OBJECTS,
})

export const changeTabToSearch = () => ({
  type: CHANGE_TAB_TO_SEARCH,
})

export const changeTabToFilter = () => ({
  type: CHANGE_TAB_TO_FILTER,
})

export const changeTabToInfo = () => ({
  type: CHANGE_TAB_TO_INFO,
})

export const changeTabToSort = () => ({
  type: CHANGE_TAB_TO_SORT,
})

export const changeTabToNothingSelected = () => ({
  type: CHANGE_TAB_TO_NOTHING_SELECTED,
})

export const changeLoglevelVisibility = (logLevel) => ({
  type: CHANGE_LOGLEVEL_VISIBILITY,
  logLevel: logLevel
})

export const changeLogLevelColor = (logLevel, newColor) => ({
  type: CHANGE_LOGLEVEL_COLOR,
  logLevel: logLevel,
  newColor: newColor
})