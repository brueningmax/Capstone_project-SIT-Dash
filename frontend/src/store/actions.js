import { Navigate } from "react-router-dom";
import { baseurl } from "../store/baseurl";
import axios from "axios";



export const getBootcamps = (dispatch,
  getState,
  start_date,
  end_date,
  bootcamp_type,
  bootcamp_location,
  navigate) => {
  const url = `${baseurl}bootcamps/all/`;
  const method = "GET";
  const headers = new Headers({'Content-type':'application/json'});
  axios.post(url)
  .then(response => {
    console.log(response);
  })
}