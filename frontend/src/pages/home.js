import Footer from "../components/footer";
import Header from "../components/header";
import React, { useState, useEffect } from "react"; 
import Axios from "axios"
import Graph from "../components/graph"; 
import Sidebar from "../components/sidebar";
import NarrowBar from "../components/narrowbar";
import MiddleBar from "../components/middlebar";
import MiddleContainer from "../style/middlebar.style";
import { baseurl } from "../store/baseurl";
import MainPageStyle from "../style/main.style";
import AppsGraph from "../components/applicationsGraph";
import { Line } from "../components/applicationsGraph";

const Home = () => {

  const [applicationsData, setLatestApplications] = useState([]);
  const [bootcampsData, setLatestBootcamps] = useState([]);
  const [applicationsGraphData, setApplicationsGraphData] = useState([]);
  const [numLatestApplications, setNumLatestApplications] = useState(5)
  const [numUpcomingBootcamps, setNumUpcomingBootcamps] = useState(8)
  
  useEffect(() => {
    getLatestApplications();
    getLatestBootcamps();
    getApplicationsGraphData();
  }, [])
  
  const getLatestApplications = async () => {
    const response = await Axios(`${baseurl}applications/latest/${numLatestApplications}`);
    setLatestApplications(response.data)
  }

  const getLatestBootcamps = async () => {
    const response = await Axios(`${baseurl}bootcamps/upcoming/${numUpcomingBootcamps}`);
    setLatestBootcamps(response.data)
  }

  const getApplicationsGraphData = async () => {
    const response = await Axios(`${baseurl}applications/graph_data/dashboard/`);
    setApplicationsGraphData(response.data)
  }

  const bootcampsTable =
    bootcampsData.map((item) =>
      <MiddleBar
        key={item.name}
        shortBootcampName={item.name}
        bootcampLocation={item.bootcamp_location}
        bootcampStartDate={item.start_date}



      />

      //   <tr key={item.name}>
      //     <td>{item.name}</td>
      //     <td>{item.bootcamp_location.location}</td>
      //     <td>{item.start_date}</td>
      //   </tr>
    )

  const applicationsTable =
    applicationsData.map((item) =>
      <NarrowBar
        data={{item}}
        lastName={item.last_name}
        firstName={item.first_name}
        bootcampName={item.bootcamp.name}
        bootcampLocation={item.bootcamp.bootcamp_location}
        key={item.last_name}
      />
    )
  
  // console.log(applicationsGraphData)
  // console.log(bootcampsData)

  return (
    <div>
    
      <Header />
      <MainPageStyle>
      <div className="sidebarleft">
          <Sidebar />
      </div>
      <div className="mainbarright">
      Dashboard
      

      <div className="latest-applications">

          <h1>Latest Applications</h1>

            {applicationsTable}
          
          
          <h1>Upcoming Bootcamps</h1>

          {bootcampsTable}


          <Graph applications={applicationsData} />

          <AppsGraph data={applicationsGraphData} />
          
      </div>
      </div>
      
      </MainPageStyle>
      
      <Footer />
    </div>
) 
}

export default Home;
