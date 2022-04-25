import React from "react"


const Bootcamptime =(props)=>{
    let base_styling = "border border-blue-100 flex items-center shadow-inner h-1/2"

    return (
        <>
            {props.time == "part-time"? <div className={base_styling + " bg-yellow-300"}><p className="text-xs px-2">PART-TIME</p></div> : '' }
            {props.time == "full-time"? <div className={base_styling + " bg-blue-300"}><p className="text-xs px-2">FULL-TIME</p></div> : '' }
        </>

    );
}

export default Bootcamptime;