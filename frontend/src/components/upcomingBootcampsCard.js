import React from "react";

const UpComingBootcampsCard = (props) => {
  return (
    <div className="h-4/5 w-1/4 flex flex-col border-red-600 border-2 border-solid items-center  justify-center m-0 p-0">
      <div className="h-1/5 w-full m-0 p-0">
        <div className="flex">
          <p>{props.data.name}</p>
        </div>
        <div className="flex justify-between">
          <p>{props.data.bootcamp_location}</p>
          <p>start: {props.data.start_date}</p>
        </div>
      </div>

      <div className="h-3/6 w-full   m-0 p-0">
        <p>GRAPH</p>
      </div>

      <div className="w-full ">
        <table className="table-fixed w-full">
          <tr>
            <th className="text-left text-toReview">to review:</th>
            <th>{props.data.applications.to_review}</th>
          </tr>
          <tr>
            <th className="text-left text-notSerious">not serious:</th>
            <th>{props.data.applications.not_serious}</th>
          </tr>
          <tr>
            <th className="text-left text-serious ">serious:</th>
            <th>{props.data.applications.serious}</th>
          </tr>
          <tr>
            <th className="text-left text-accepted">accepted:</th>
            <th>{props.data.applications.accepted}</th>
          </tr>
          <tr>
            <th className="text-left text-enrolled">enrolled:</th>
            <th>{props.data.applications.enrolled}</th>
          </tr>
          <tr>
            <th className="text-left text-droppedOut">droped out:</th>
            <th>{props.data.applications.dropped_out}</th>
          </tr>
          <tr>
            <th className="text-left">Total</th>
            <th>{props.data.applications.total}</th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default UpComingBootcampsCard;
