import {
    TOGGLE_MENU,
    CHANGE_NAV_INDEX,
} from "./ActionTypes"

export const toggleMenu = () => ({
    type: TOGGLE_MENU
})

export const changeNavIndex = (newNavIndex) => ({
    type: CHANGE_NAV_INDEX,
    newNavIndex: newNavIndex
})