import React, { useEffect } from "react"


const ApplicationStatus =(props)=>{
    let base_styling = "border border-blue-100 flex items-center shadow-inner h-1/2"

    return (
        <>
            {props.status == "not_serious"? <div className={base_styling + " bg-yellow-300"}><p className="text-xs px-2">NOT SERIOUS</p></div> : '' }
            {props.status == "serious"? <div className={base_styling + " bg-green-400"}><p className="text-xs px-2">SERIOUS</p></div> : '' }
            {props.status == "accepted"? <div className={base_styling + " bg-lime-500"}><p className="text-xs px-2">ACCEPTED</p></div> : '' }
            {props.status == "enrolled"? <div className={base_styling + " bg-blue-400"}><p className="text-xs px-2">ENROLLED</p></div> : '' }
            {props.status == "dropped_out"? <div className={base_styling + " bg-pink-600"}><p className="text-xs px-2">DROPPED OUT</p></div> : '' }
            {props.status == "graduated"? <div className={base_styling + " bg-amber-600"}><p className="text-xs px-2">GRADUATED</p></div> : '' }
            {props.status == "found_job"? <div className={base_styling + " bg-purple-500"}><p className="text-xs px-2">FOUND JOB</p></div> : '' }
        </>
    );
}

export default ApplicationStatus;