import {
  TOGGLE_MENU,
  CHANGE_NAV_INDEX
} from "../actions/ActionTypes"

const initialState = {
  display_menu: false,
  navIndex: 0,
}

export default function navMenu(state=initialState,action) {
  switch (action.type) {
    case TOGGLE_MENU:
      return {...state, display_menu: !state.display_menu}
    case CHANGE_NAV_INDEX:
      return {...state,navIndex: action.newNavIndex}
    default:
      return state
  }
}