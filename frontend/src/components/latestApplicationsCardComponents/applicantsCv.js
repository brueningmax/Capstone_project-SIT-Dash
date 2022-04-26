import React from "react"
import { useNavigate } from "react-router-dom";


const ApplicantsCv =(props)=>{
    
    return(
        <button className="flex w-6 h-6 bg-lime-500 rounded-2xl text-white font-bold justify-items-center items-center border border-lime-700">
            <p className="w-full text-center text-sm">CV</p>
        </button>

    );
}

export default ApplicantsCv;