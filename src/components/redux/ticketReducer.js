//import { act } from "react-dom/test-utils";
import { API_CALL,API_FAILS, GET_INFO } from "./ticketTypes";

const initialState = {
  events : [],
  error : '',
  search : [],
  detail : []
}
const ticketReducer = (state = initialState,action) => {
  switch(action.type) {
    case API_CALL :return {
      ...state,
      events : action.payload,
      error:'',
    }
    case API_FAILS :return {
      ...state,
      events : [],
      error: action.payload,
    }
    case GET_INFO : return {
      ...state,
      detail:action.payload

    }
    default : return state
  }
}

export default ticketReducer