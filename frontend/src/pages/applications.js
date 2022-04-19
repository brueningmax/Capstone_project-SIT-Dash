import Footer from "../components/footer";
import Header from "../components/header";
import NarrowBar from "../components/narrowbar";
import Sidebar from "../components/sidebar";
import MainPageStyle from "../style/main.style";
import MiddleContainer from "../style/middlebar.style";
import { baseurl } from "../store/baseurl";
import Axios from "axios";
import { useState, useEffect } from "react"
import MiddleBar from "../components/middlebar";



const Applications = () => {

  const [applicationsData, setApplications] = useState([]);

  useEffect(() => {
    getApplications();
  }, [])

  const getApplications = async() => {
    const response = await Axios(`${baseurl}applications/all`);
      setApplications(response.data)
    }

    console.log('--------------')
    console.log(applicationsData)
    console.log('--------------')

    const applicationsTable = applicationsData.map((item) => 
        <NarrowBar
          key = {item.name}
          firstName = {item.first_name}
          lastName = {item.last_name}
          bootcampName = {item.bootcamp.name}
          bootcampStartDate = {item.bootcamp.start_date}
          bootcampLocation = {item.bootcamp.bootcamp_location}




          />
    
    )





  return (
    <div>

      <Header />
      <MainPageStyle>
        <div className="sidebarleft">
          <Sidebar />
        </div>
        <div className="mainbarright">
          {applicationsTable}
          
          
          



          
      
          Applications
        </div>
      </MainPageStyle>
      <Footer />
    </div>
) 
}

export default Applications;