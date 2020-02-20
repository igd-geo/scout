import {
    SHOW_HIDE_CATEGORY,
  } from "../actions/Settings/ActionTypes"
  
  const initialState = {
    categoryVisibility: {
        "coloring": true,
    }
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
      default:
        return state
    }
  }