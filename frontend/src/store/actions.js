// import { Navigate } from "react-router-dom";
// import { baseurl } from "./urls";

// export const latestApplications = (dispatch, getState) => {
//   const url = `${baseurl}/applications/latest/`;
//   const method = "GET";
//   const headers = new Headers({"Content-type":"application/json"});
//   const config = {method,headers};
//   fetch(url,config)
//   .then(response => response.json())
//   .then(data => {
//     dispatch({ type: "setLatestApplications", payload: data })
//   })
// }