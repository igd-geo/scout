import {
    SHOW_HIDE_CATEGORY,
  } from "./ActionTypes"
  
  export const changeCategoryVisibility = (category) => ({
    type: SHOW_HIDE_CATEGORY,
    category: category,
  })