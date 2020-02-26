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
    CHANGE_TAB_TO_NOTHING_SELECTED,
    CHANGE_LOGLEVEL_VISIBILITY,
    CHANGE_LOGLEVEL_COLOR,
} from '../actions/LiveMonitoring/ActionTypes'
import { SEARCH, FILTER, INFO, NOTHING_SELECTED} from '../actions/LiveMonitoring/LogTabActions'

const initialState = {
  sseClient: null,
  displayBeatObjectDialog: false,
  displayInfoDialog: false,
  selectedIndex: -1,
  beatHostInput: "http://localhost:8080",
  connected: false,
  colorLookupTable: {
    "fatal":   "#ff0000",
    "error":   "#ff5252",
    "warn":    "#fff170",
    "info":    "#42adff",
    "debug":   "#ff82d7",
    "trace":   "#9dff82",
  },
  visibilityLogLevel: {
    "fatal" :  true,
    "error" :  true,
    "warn"  :  true,
    "info"  : true,
    "debug" : true,
    "trace" : true,
  },
  beatObjects: [],
  filteredBeatObjects: [],
  logTab: NOTHING_SELECTED,
}

function filter(state) {
  return state.beatObjects.filter(obj => state.visibilityLogLevel[obj["log_level"]]);
}

export default function liveMonitoring (state=initialState, action) {
  switch (action.type) {
    case START_LIVE_MONITORING:
      var newSseClient =  new EventSource(state.beatHostInput) 
    
      newSseClient.onmessage = action.onclickFunction
      if (newSseClient.readyState === 2) {
        return state
      }

      console.log('connecting')

      return {
        ...state,
        connected: true,
        beatHostConnectButtonText: "Disconnect",
        sseClient: newSseClient,
      }
    case STOP_LIVE_MONITORING:
      state.sseClient.close()
      console.log('disconnecting')
      return {
        ...state,
        connected: false,
        sseClient: null,  
      }
    case ADD_BEAT_OBJECT:
      return {
        ...state,
        beatObjects: [
          action.newBeatObject,
          ...state.beatObjects,
        ],
        filteredBeatObjects: filter(state)
      }
    case TOGGLE_BEAT_OBJECT_DIALOG:
      return {
        ...state, 
        displayBeatObjectDialog: !state.displayBeatObjectDialog,
        selectedIndex: action.selectedIndex,
      }
    case CHANGE_BEAT_HOST_INPUT:
      return {
        ...state,
        beatHostInput: action.newBeatHostInput,
      }
    case CLEAR_BEAT_OBJECTS:
      return  {
        ...state,
        beatObjects: [],
        filteredBeatObjects: []
      }
    case CHANGE_TAB_TO_SEARCH:
      return {
        ...state,
        logTab: SEARCH,
      }
    case CHANGE_TAB_TO_FILTER:
      return {
        ...state,
        logTab: FILTER,
      }
    case CHANGE_TAB_TO_INFO:
      return {
        ...state,
        logTab: INFO,
      }
    case CHANGE_TAB_TO_NOTHING_SELECTED:
      return {
        ...state,
        logTab: NOTHING_SELECTED,
      }
    case CHANGE_LOGLEVEL_VISIBILITY:
      var newstate = {
        ...state,
        visibilityLogLevel: { 
          ...state.visibilityLogLevel,
          [action.logLevel] : !state.visibilityLogLevel[action.logLevel]
        }
      }

      return {
        ...newstate,
        filteredBeatObjects: filter(newstate)
      }
    case CHANGE_LOGLEVEL_COLOR:
      console.log(action.logLevel + " gg " + action.newColor.hex)
      return {
        ...state,
        colorLookupTable: { 
          ...state.colorLookupTable,
          [action.logLevel] : action.newColor.hex
        }
      }
    default:
      return state
  }
}
