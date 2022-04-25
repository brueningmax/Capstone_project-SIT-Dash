import React from "react"
import LinkedIn_logo from '../../assets/li_logo.png'


const ApplicantsLi =(props)=>{
        
    return(
        <div>
             <a href={props.data.linkedin_profile}><img className=" w-6 h-6" src={LinkedIn_logo} alt='LinkedIn Logo' /></a>
          </div>
        

    );
}

export default ApplicantsLi;