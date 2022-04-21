import React from "react";
import BootcampPieChart from "./bootcampPieChart";

const UpComingBootcampsCard = (props) => {

  return (
    <div className="h-4/5 w-1/4 flex flex-col border-red-600 border-2 border-solid items-center  justify-center m-0 p-0">

      <div className="h-1/5 w-full m-0 p-0">
        <div className="flex">
          <p>{props.data.name}</p>
        </div>
        <div className="flex justify-between">
          <p>{props.data.bootcamp_location}</p>
          <p>{props.data.start_date}</p>
        </div>
      </div>

      <div className="h-3/6 w-full  m-0 p-0">
        <p>GRAPH</p>
      </div>

      <div className="w-full ">
        <table className="table-fixed w-full text-xs">
          <tr>
            <th className="text-left font-normal">to review:</th>
            <th className="text-left font-normal">{props.data.applications.to_review}</th>
          </tr>
          <tr>
            <th className="text-left font-normal">not serious:</th>
            <th className="text-left font-normal">{props.data.applications.not_serious}</th>
          </tr>
          <tr>
            <th className="text-left font-normal">serious:</th>
            <th className="text-left font-normal">{props.data.applications.serious}</th>
          </tr>
          <tr>
            <th className="text-left font-normal">accepted:</th>
            <th className="text-left font-normal">{props.data.applications.accepted}</th>
          </tr>
          <tr>
            <th className="text-left font-normal">enrolled:</th>
            <th className="text-left font-normal">{props.data.applications.enrolled}</th>
          </tr>
          <tr>
            <th className="text-left font-normal">droped out:</th>
            <th className="text-left font-normal">{props.data.applications.dropped_out}</th>
          </tr>
          <tr>
            <th className="text-left font-normal">Total</th>
            <th className="text-left font-normal">{props.data.applications.total}</th>
          </tr>

        </table>
      </div>
    </div>
  );
};

export default UpComingBootcampsCard;
