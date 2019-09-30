import {
  START_LIVE_MONITORING,
  STOP_LIVE_MONITORING,
  ADD_BEAT_OBJECT,
  TOGGLE_BEAT_OBJECT_DIALOG,
  CHANGE_BEAT_HOST_INPUT,
  CLEAR_BEAT_OBJECTS,
  TOGGLE_INFO_DIALOG,
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

export const toggleInfoDialog = () => ({
  type: TOGGLE_INFO_DIALOG,
})