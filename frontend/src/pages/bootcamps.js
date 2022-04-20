import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
// import { getBootcamps } from "../store/actions";
import { baseurl } from "../store/baseurl";
import Axios from "axios";
import BootcampGraph from "../components/bootcampGraph";
import UpComingBootcampCard from "../components/upComingBootcampCard"


const Bootcamps = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [bootcamp_type, setBootcampType] = useState("");
  const [bootcamp_location, setBootcampLocation] = useState("");
  const [bootcampsData, setBootcamps] = useState([]);

  useEffect(() => {
    getBootcamps();
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();  
    const url = `${baseurl}bootcamps/upcoming`;
    const data = { start_date, end_date, bootcamp_type, bootcamp_location }
    getBootcamps();
}

  const getBootcamps = async() => {
    const response = await Axios(`${baseurl}bootcamps/upcoming/10`);
    console.log(response.data)
    setBootcamps(response.data)
  }

  // const bootcampsTable = 
  //   bootcampsData.map((item) =>
  //     <li key={item.name}>
  //       {item.name}
  //       <p>{item.bootcamp_location}</p>
  //       {item.start_date}
  //     </li>
    // )
  return (
    <div>
  
      
      Bootcamps

      Filters:
      <form>
        <label>
          Start Date Range:
          <input
            name="start_date"
            type="date"
            value={start_date}
            onChange={e => setStartDate(e.target.value)} />
        </label>

        <label>
          End Date Range:
          <input
            name="end_date"
            type="date"
            value={end_date}
            onChange={e => setEndDate(e.target.value)} />
        </label>

        <label>
          Bootcamp Type:
          <select
            name="bootcamp_type"
            value={bootcamp_type}
            onChange={e => setBootcampType(e.target.value)}>
              {/* <option value="default" disabled hidden>Select a value...</option> */}
              <option value="Full Stack">Full Stack</option>
              <option value="Data Science">Data Science</option>
          </select>
        </label>

        <label>
          Zurich
          <input
            name="bootcamp_location"
            type="checkbox"
            value="Zurich"
            onChange={e => setBootcampLocation(e.target.value)} />
        </label>

        <button type="button" value="Submit" onClick={handleSubmit}>
          Filter
        </button>
      </form>

      {bootcampsData.map((item) => <UpComingBootcampCard data={item} key={item.id} /> )}
    
      <BootcampGraph bootcamps={bootcampsData} />
    {/* <BootcampGraph /> */}
    
  </div>
) 
}

export default Bootcamps;
