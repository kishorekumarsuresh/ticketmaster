import { exactProp } from "@mui/utils";
import axios from "axios";
//import { useSelector } from "react-redux";
import { API_CALL,API_FAILS,COUNTRY,GENRE,GET_INFO, SEARCH_EVE} from "./ticketTypes";


export const apiCall = (data) => {
  return{
    type:API_CALL,
    payload:data
  }
}
export const apiFails = (err) => {
  return{
    type:API_FAILS,
    payload:err
  }
}
export const getInfo = (detail) =>{
  return{
    type:GET_INFO,
    payload:detail
  }
}
export const setSearch = (search) => {
  return{
    type:SEARCH_EVE,
    payload:search
  }
}
export const setCountry = (country) => {
  return{
    type:COUNTRY,
    payload:country
  }
}
export const setGenre = (genre) => {
  return{
    type:GENRE,
    payload:genre
  }
}

export const getDetails = (id) => {
  return (dispatch) => {
    axios.get(`https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
      const detail = response.data
      console.log('single det',detail)
      dispatch(getInfo(detail))

    })
    .catch(err => {
      const errMsg = err.message
      console.log('second response fails',errMsg)

    })
    
  }
}

export const getEvents = () =>{
  return (dispatch) => {
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&size=20&apikey=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
      const resp = response.data._embedded.events
      console.log('first response succeeds',resp)
      dispatch(apiCall(resp))
    })
    .catch(err => {
      const errMsg = err.message
      console.log('first response fails',errMsg)
      dispatch(apiFails(errMsg))
    })
  }
}

export const searchEve = (search) => {
  return(dispatch) => {
    //dispatch(searchEvent(search))
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${search}&source=universe&countryCode=US&apikey=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
      const resp = response.data._embedded.events
      console.log('search response succeeds',resp)
      dispatch(apiCall(resp))
    })
    .catch(err => {
      const errMsg = err.message
      console.log('search response fails',errMsg)
      dispatch(apiFails(errMsg))
    })
  }
}

export const selectGenre = (genre,search,country) => {
  return (dispatch) => {
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=${genre}&apikey=${process.env.REACT_APP_API_KEY}`)
      .then(response => {
        const resp = response.data._embedded.events
        console.log('genre response succeeds',resp)
        dispatch(apiCall(resp))
      })
      .catch(err => {
        const errMsg = err.message
        console.log('genre response fails',errMsg)
        dispatch(apiFails(errMsg))
      })
  }
}

export const selectCountry = (country) => {
  return (dispatch) => {
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${country}&apikey=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
      const resp = response.data._embedded.events
      console.log('country response succeeds',resp)
      dispatch(apiCall(resp))
    })
    .catch(err => {
      const errMsg = err.message
      console.log('country response fails',errMsg)
      dispatch(apiFails(errMsg))
    })
  }
}

export const selectFromDate = (date) => {
  return (dispatch) => {
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?startDateTime=${date}T14:00:00Z&apikey=5AlwKYOWzIHre84OfsJbjlsBJ0djSiT9`)
    .then(response => {
      const resp = response.data._embedded.events
      console.log('date response succeeds',resp)
      dispatch(apiCall(resp))
    })
    .catch(err => {
      const errMsg = err.message
      console.log('date response fails',errMsg)
      dispatch(apiFails(errMsg))
    })
  }
}