import Footer from "../components/footer";
import Header from "../components/header";
import NarrowBar from "../components/narrowbar";
import Sidebar from "../components/sidebar";
import MainPageStyle from "../style/main.style";
import MiddleContainer from "../style/middlebar.style";
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
  

  const allApplications = applicationsData.map ((item) =>
    <NarrowBar
      lastName={item.last_name}
      firstName={item.first_name}
      bootcampName={item.bootcamp.name}
      bootcampLocation={item.bootcamp.bootcamp_location}
      key={item.last_name}
      />

  )



  return (
    <div>

      <Header />
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
      <MainPageStyle>
        <div className="sidebarleft">
          <Sidebar />
        </div>
        <div className="mainbarright">
          {allApplications}
          <NarrowBar />
          <NarrowBar />
          <NarrowBar />
          <NarrowBar />
          <NarrowBar />
          <MiddleContainer />
          <MiddleContainer />
          <MiddleContainer />
          Applications
        </div>
      </MainPageStyle>
      <Footer />
    </div>
) 
}

export default Applications;