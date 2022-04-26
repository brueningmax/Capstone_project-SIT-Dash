import BootcampType from "./latestApplicationsCardComponents/bootcampType";
import ApplicationStatus from "./latestApplicationsCardComponents/applicationStatus";
import Bootcamptime from "./latestApplicationsCardComponents/bootcampTime";
import React, {useState} from "react";
import ApplyDate from "./latestApplicationsCardComponents/applyDate";
import {BiExpandAlt} from "react-icons/bi";
import InterviewStatus from "./latestApplicationsCardComponents/interviewStatus";
import ApplicantsCv from "./latestApplicationsCardComponents/applicantsCv";
import ApplicantsLinkedIn from "./latestApplicationsCardComponents/applicantsLinkedIn";
import Axios from "axios";
import {baseurl} from "../store/baseurl";
import {BsFillPencilFill} from "react-icons/bs";
import {Link} from "react-router-dom";

const CollapsableApplicationCard = (props) => {

    const [collapsed, setCollapsed] = useState(false)
    const editPage = `/editApplication/${props.data.id}`

    const openCV = async () => {
        const response = await Axios(
            `${baseurl}applications/loadCV/${props.data.id}`, {
                responseType: "blob",
            }
        )
            .then((response) => {
                //Create a Blob from the PDF Stream
                const file = new Blob([response.data], {type: "application/pdf"});
                //Build a URL from the file
                const fileURL = URL.createObjectURL(file);
                //Open the URL on new Window
                const pdfWindow = window.open();
                pdfWindow.location.href = fileURL;
            })
    }

    return (
        <div className="flex flex-col w-forty px-6 py-0 haha  bg-white rounded-lg ">
            <div className="h-tenP flex flex-row justify-start items-center">
                <BootcampType type={props.data.bootcamp.type}/>
                <ApplicationStatus status={props.data.status}/>
                <Bootcamptime time={props.data.time}/>
            </div>
            <div className="flex justify-between h-1/5 items-center py-1">
                <h1 className="font-bold text-4xl">{props.data.first_name} {props.data.last_name}</h1>
                <button onClick={() => setCollapsed(!collapsed)} className="border rounded-sm border-black"><BiExpandAlt className="w-6 h-6 color-blue-200"/>
                </button>
            </div>
            <ApplyDate applied={props.data.applied}/>


            <div className={collapsed ? "hidden" : "flex flex-row ease-linear"}>
                <div className="flex grow items-center gap-5 justify-center">
                    <ApplicantsCv cv={props.data.cv} function={openCV}/>
                    <ApplicantsLinkedIn link={props.data.linkedin_profile}/>
                    <Link to={editPage}><BsFillPencilFill className="w-4 h-4 border-solid"/></Link>
                </div>
                <div className="w-5/12 border-l-2 border-gray-300 flex-col pl-5 items-center">
                    <div className="flex place-content-between"><p>Personal Interview</p> <InterviewStatus
                        InterviewStatus={props.data.personal_passed}/></div>
                    <div className="flex place-content-between"><p>Technical Interview</p> <InterviewStatus
                        InterviewStatus={props.data.technical_passed}/></div>
                    <div className="flex place-content-between"><p>Enrolled</p> <InterviewStatus
                        status={props.data.status}/></div>
                </div>
            </div>


        </div>
    )
}

export default CollapsableApplicationCard