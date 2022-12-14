import axios from "axios";
import { API_CALL,API_FAILS,COUNTRY,GENRE,GET_INFO, SEARCH_EVE, SET_LOADING} from "./ticketTypes";


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
export const setGenre = (genre,country) => {
  return{
    type:GENRE,
    payload1:genre,
    payload2:country
  }
}
export const setLoading = (load) => {
  return {
    type:SET_LOADING,
    payload:load
  }
}

export const getDetails = (id) => {

  let url = `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${process.env.REACT_APP_API_KEY}`
 
  return (dispatch) => {
    axios.get(url)
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
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=${process.env.REACT_APP_API_KEY}`)
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

export const selectGenre = (genre,country) => {
  let url = ''
  if (genre && country){
    url = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=${genre}&countryCode=${country}&apikey=${process.env.REACT_APP_API_KEY}`
  }
  else{
    url = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=${genre}&apikey=${process.env.REACT_APP_API_KEY}`
  }
  return (dispatch) => {
    axios.get(url)
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

export const selectCountry = (country,genre) => {
  let url = ''
  if (country && genre){
    console.log(country,genre)
    url = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=${genre}&countryCode=${country}&apikey=${process.env.REACT_APP_API_KEY}`
  }
  else {
    console.log(country)
    url = `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${country}&apikey=${process.env.REACT_APP_API_KEY}`
  }
  
  return (dispatch) => {
    axios.get(url)
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