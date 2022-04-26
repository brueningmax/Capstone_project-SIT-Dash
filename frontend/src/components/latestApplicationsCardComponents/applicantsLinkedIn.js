import React from "react"
import LinkedIn_logo from '../../assets/li_logo.png'


const ApplicantsLinkedIn =(props)=>{
        
    return(
        <div className="w-6 h-6">
             <a href={props.link}><img src={LinkedIn_logo} alt='LinkedIn Logo' /></a>
          </div>
        

    );
}

export default ApplicantsLinkedIn;