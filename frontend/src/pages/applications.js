
import LatestApplicationsCard from "../components/latestApplicationsCard";
import Sidebar from "../components/sidebar";

import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { baseurl } from "../store/baseurl";
import Axios from "axios";



const Applications = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [start_date_applications, setStartDateApplications] = useState("");
  const [end_date_applications, setEndDateApplications] = useState("");
  // const [bootcamp_type, setBootcampType] = useState("");
  // const [bootcamp_location, setBootcampLocation] = useState("");
  const [applicationsData, setApplications] = useState([]);
  
  useEffect( ()=>{
    getApplications();
  },[])



  const getApplications = async() => {
    const response = await Axios(`${baseurl}applications/all/`);
    setApplications(response.data)
    console.log(response.data)
    }



  return (
    <div>

      
      Filters:
      <form>
        <label>
          Start Date Range:
          <input
            name="start_date"
            type="date"
            value={start_date_applications}
            onChange={e =>setStartDateApplications(e.target.value) }
          />
        </label>
      </form>
      
        <div className="sidebarleft">
          <Sidebar />
        </div>
        <div className="mainbarright">

          Applications
          {applicationsData.map((item) => <LatestApplicationsCard data={item} key={item.id} />)}
        </div>
      
      
    </div>
) 
}

export default Applications;