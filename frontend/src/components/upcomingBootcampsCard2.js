import React from "react";
import BootcampPieChart from "./bootcampPieChart";

const UpComingBootcampsCard2 = (props) => {
  return (
    <div className="h-cardsHeight4 w-52 p-4 flex flex-col border-2 border-gray-200 shadow-lg rounded-lg bg-white items-center  justify-center ">
      <div className="h-1/5 w-full m-0 p-0">
        <div className="flex">
          <p>{props.data.name}</p>
        </div>
        <div className="flex justify-between">
          <p>{props.data.bootcamp_location}</p>
          <p>{props.data.start_date}</p>
        </div>
      </div>

      <div className="h-4/5 w-full  m-0 p-0">
        <BootcampPieChart data={props.data.applications} />
      </div>
    </div>
  );
};

export default UpComingBootcampsCard2;
