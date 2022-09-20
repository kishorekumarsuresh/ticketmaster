//import { act } from "react-dom/test-utils";
import { API_CALL,API_FAILS, GET_INFO ,COUNTRY , GENRE, SEARCH_EVE} from "./ticketTypes";

const initialState = {
  events : [],
  error : '',
  detail : [],
  country :'',
  genre:'',
  search:''
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
    case COUNTRY : return {
      ...state,
      country:action.payload
    }
    case GENRE: return {
      ...state,
      genre:action.payload
    }
    case SEARCH_EVE: return {
      ...state,
      search:action.payload
    }
    default : return state
  }
}

export default ticketReducer