import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { baseurl } from "../store/baseurl";
import Axios from "axios";
import UpComingBootcampsCard2 from "../components/upcomingBootcampsCard2";
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
    <div className="flex flex-col w-full h-full bg-background">
      <div className="flex  w-full h-1/2 items-center justify-center ">
        <div className="flex w-full h-full items-center  justify-center">
        <div className="flex h-full w-cardsWidth2 bg-white shadow-lg rounded-lg opacity-75">
          <UpcomingBootcampsGraph data={bootcampsData} />
        </div>
        </div>
      </div>

      <div className="flex h-1/2 items-center justify-center mb-4 border-black">
      <div className="flex flex-wrap  h-full w-cardsWidth2  justify-start gap-10 overflow-auto">
            {bootcampsData.slice(0,100).map((item) => (
              <UpComingBootcampsCard2 data={item} key={item.id} />
            ))}
          </div>


       
      </div>
    </div>
  );
};

export default Bootcamps;
