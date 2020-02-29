import {
    SHOW_HIDE_CATEGORY,
    SHOW_COLOR_PICKER,
  } from "../actions/Settings/ActionTypes"
  
  const initialState = {
    categoryVisibility: {
        "coloring": true,
    },
    colorPickerIndex: -1
  }
  
  export default function settings(state=initialState, action) {
    switch (action.type) {
      case SHOW_HIDE_CATEGORY:
        return {...state, 
            categoryVisibility: { 
                ...state.categoryVisibility,
                [action.category] : !state.categoryVisibility[action.category]
              },
            }
      case SHOW_COLOR_PICKER:
          return{
              ...state,
              colorPickerIndex: action.index
          }
      default:
        return state
    }
  }