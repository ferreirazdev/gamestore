import { UiReducerState, UiActions, UPDATE_SEARCH_KEYWORD } from "../@types";

const initState: UiReducerState = {
  searchKeyWord: 'name'
}

export default function uiReducer(state: UiReducerState = initState, action: UiActions): UiReducerState{
  switch(action.type) {
    case UPDATE_SEARCH_KEYWORD:
      return {
        ...state,
        searchKeyWord: action.payload
      }

      default:
        return state
  }
}