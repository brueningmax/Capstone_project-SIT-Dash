import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { getBootcamps } from "../store/actions";
import { baseurl } from "../store/baseurl";
import Axios from "axios";
import BootcampGraph from "../components/bootcampGraph";
import UpComingBootcampsCard2 from "../components/upcomingBootcampsCard2";
import Sidebar from "../components/sidebar";
import UpcomingBootcampsGraph from "../components/upcomingBootcampsGraph";
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
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `${baseurl}bootcamps/upcoming`;
    const data = { start_date, end_date, bootcamp_type, bootcamp_location };
    getBootcamps();
  };

  const getBootcamps = async () => {
    const response = await Axios(`${baseurl}bootcamps/upcoming/10`);
    console.log(response.data);
    setBootcamps(response.data);
  };

  return (
    <div className="flex flex-col w-full h-screen bg-background">
      <div className="flex  w-full h-fortyP items-center justify-center mt-4">
        <div className="flex w-cardsWidth2 h-full  border-black">
          <div className="flex h-full w-full  justify-between items-center">
            {bootcampsData.map((item) => (
              <UpComingBootcampsCard2 data={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex h-sixteyP items-center justify-center mb-4 border-black">
        <div className="flex h-5/6 w-cardsWidth2 bg-white shadow-lg rounded-lg opacity-75">
          <UpcomingBootcampsGraph data={bootcampsData} />
        </div>
      </div>
    </div>
  );
};

export default Bootcamps;
