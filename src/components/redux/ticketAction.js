import { exactProp } from "@mui/utils";
import axios from "axios";
//import { useSelector } from "react-redux";
import {API_CALL,API_FAILS,GET_INFO} from "./ticketTypes";


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

export const getDetails = (id) => {
  return (dispatch) => {
    axios.get(`https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=5AlwKYOWzIHre84OfsJbjlsBJ0djSiT9`)
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

export const searchEve = () => {
  return(dispatch) => {
    axios.get()
    
  }
}
