import {
    SHOW_HIDE_CATEGORY,
    SHOW_COLOR_PICKER,
  } from "./ActionTypes"
  
  export const changeCategoryVisibility = (category) => ({
    type: SHOW_HIDE_CATEGORY,
    category: category,
  })

  export const showColorPicker = (index) => ({
    type: SHOW_COLOR_PICKER,
    index: index,
  })