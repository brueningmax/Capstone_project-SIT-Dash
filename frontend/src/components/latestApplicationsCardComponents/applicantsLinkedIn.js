import React, { useEffect } from "react"
import LinkedIn_logo from '../../assets/li_logo.png'
import LinkedIn_grey from '../../assets/li_logo_grey.png'


const ApplicantsLinkedIn =(props)=>{

    return(
        <a href={props.link} target="_blank" rel="noreferrer noopener" className={props.link === null || props.link === "" ? "cursor-not-allowed" : "cursor-pointer" }>
            <img className="w-6 h-6" src={props.link === null || props.link === "" ? LinkedIn_grey : LinkedIn_logo} alt='LinkedIn Logo' />
        </a>
    );
}

export default ApplicantsLinkedIn;