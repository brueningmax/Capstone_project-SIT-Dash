import React from "react"


const BootcampType =(props)=>{
    
    let base_styling = "border border-blue-100 flex items-center shadow-inner h-1/2"

    return (
        <>
            {props.type == "Hash 101"? <div className={base_styling + " bg-green-400"}><p className="text-xs px-2">HASH</p></div> : '' }
            {props.type == "BlockChain Fundamentals"? <div className={base_styling + " bg-yellow-300"}><p className="text-xs px-2">BLOCK CHAIN</p></div> : '' }
            {props.type == "Online Security"? <div className={base_styling + " bg-cyan-300"}><p className="text-xs px-2">ONLINE SECURITY</p></div> : '' }
            {props.type == "Data Science Full Time"? <div className={base_styling + " bg-blue-400"}><p className="text-xs px-2">DATA SCIENCE</p></div> : '' }
            {props.type == "Full-Stack Bootcamp"? <div className={base_styling + " bg-red-500"}><p className="text-xs px-2">FULL STACK</p></div> : '' }
        </>
    );
}

export default BootcampType;