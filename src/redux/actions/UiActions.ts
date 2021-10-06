import { SetSearchKeywordAction, UPDATE_SEARCH_KEYWORD } from "../@types";

export function setSearchKeyword(keyword: string): SetSearchKeywordAction{
  return {
    type: UPDATE_SEARCH_KEYWORD,
    payload: keyword
  }
}