import React from "react";
import BootcampPieChart from "./bootcampPieChart";

const UpComingBootcampsCard2 = (props) => {
  return (
    <div className="flex flex-col w-1/2 h-5/6  shadow-lg rounded-lg bg-white items-center  justify-start ">
      <div className="flex  h-1/4 w-full items-center justify-between bg-lavender">
        <div className="flex h-1/3 w-1/3  justify-center">
          <p>{props.data.name}</p>
        </div>
        <div className="flex h-1/3 w-1/3 justify-center">
          <p>{props.data.bootcamp_location}</p>
        </div>
        <div className="flex h-1/3 w-1/3 justify-center">
          <p>{props.data.start_date}</p>
        </div>
      </div>

      <div className="flex p-6 h-3/4 w-full">
        <BootcampPieChart data={props.data.applications} />
      </div>
    </div>
  );
};

export default UpComingBootcampsCard2;
