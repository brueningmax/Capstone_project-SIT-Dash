import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom"
import Axios from "axios";
import { baseurl } from "../store/baseurl";

const EditApplication = () => {

    const params = useParams().id

    const [applicationData, setApplicationData] = useState({})
    const [bootcamps, setBootcamps] = useState([])


    useEffect(() => {
        getApplicationData()
        getBootcamps()
    }, [])

    const getApplicationData = async () => {
        const response = await Axios(
            `${baseurl}applications/${params}`
          );
          setApplicationData(response.data);
        };

    const getBootcamps = async () => {
        const response = await Axios(
            `${baseurl}bootcamps/all/`
        );
        setBootcamps(response.data)
    }

    const onChangeHandler = (event) => {
        let newState = {...applicationData}
        newState[event.target.id] = event.target.value
        setApplicationData(newState)
    }

    const saveChanges = async() => {
        const response = await Axios.patch(
            `${baseurl}applications/${params}`, applicationData
        );
        if (response.status == 200){
            alert('Changes saved')
        }    
    }

    return (
        <div className=" flex flex-col w-full ">
            <div className="flex flex-col w-full h-1/4 border border-b-[2px] border-black-200 p-5">
                <div><p className="text-lg font-medium">Personal Data</p></div>
                <div className="flex place-content-between pt-5 gap-25">

                    <div className="flex w-1/4 gap-5">
                        <div className="w-1/2">
                            <div className="flex place-content-between">
                                <div className="flex flex-col w-full">
                                    <label htmlFor="first_name" >First name</label>
                                    <input onChange={onChangeHandler} value={applicationData.first_name ?? ''} typeof="text" className="w-full border border-black-100 bg-gray-100" id="first_name" />
                                </div>
                            </div>
                            <div className="flex ">
                                <div className="flex flex-col w-full">
                                    <label htmlFor="street" >Street</label>
                                    <input onChange={onChangeHandler} value={applicationData.street ?? ''}  placeholder='please enter'  typeof="text" className="w-full border border-black-100 bg-gray-100" id="street" />
                                </div>
                            </div>
                            <div className="flex place-content-between ">
                                <div className="flex flex-col w-full">
                                    <label htmlFor="city" >City</label>
                                    <input onChange={onChangeHandler} value={applicationData.city ?? ''} placeholder='please enter' typeof="text" className="w-full border border-black-100 bg-gray-100" id="city" />
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col place-content-between">
                            <div className="flex flex-col w-full ">
                                <label htmlFor="last_name" >Last name</label>
                                <input onChange={onChangeHandler} value={applicationData.last_name ?? ''} placeholder='please enter' typeof="text" className="w-full border border-black-100 bg-gray-100" id="last_name" />
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="zip" >Zip/Postal code</label>
                                <input onChange={onChangeHandler} value={applicationData.zip ?? ''} placeholder='please enter' typeof="text" className="w-full border border-black-100 bg-gray-100" id="zip" />
                            </div>
                        </div>
                    </div>

                    <div className="flex w-1/4 gap-5">
                        <div className="w-1/2">
                            <div className="flex place-content-between">
                                <div className="flex flex-col w-full">
                                    <label htmlFor="email" >Email</label>
                                    <input onChange={onChangeHandler} value={applicationData.email ?? ''} placeholder='please enter' typeof="text" className="w-full border border-black-100 bg-gray-100" id="email" />
                                </div>
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="linkedin_profile" >LinkedIn profile</label>
                                <input onChange={onChangeHandler} value={applicationData.linkedin_profile ?? ''} placeholder='please enter' typeof="text" className="w-full border border-black-100 bg-gray-100" id="linkedin_profile" />
                            </div>
                            <div className="flex place-content-between ">
                                <div className="flex flex-col w-full">
                                    <label htmlFor="company_name" >Company name</label>
                                    <input onChange={onChangeHandler} value={applicationData.company_name ?? ''} placeholder='please enter' typeof="text" className="w-full border border-black-100 bg-gray-100" id="company_name" />
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col place-content-between">
                            {/* <div className="flex flex-col w-full">
                                <label htmlFor="cv" >CV</label>
                                <input onChange={onChangeHandler} value={applicationData.cv ?? ''} placeholder='please enter' typeof="file" className="w-full border border-black-100 bg-gray-100" id="cv" />
                            </div> */}
                            <div className="flex flex-col w-full">
                                <label htmlFor="company_email" >Company email</label>
                                <input onChange={onChangeHandler} value={applicationData.company_email ?? ''} placeholder='please enter' typeof="email" className="w-full border border-black-100 bg-gray-100" id="company_email" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/5" >
                        <div className="flex flex-col w-full">
                            <label htmlFor="bootcamp" >Bootcamp</label>
                            <select onChange={onChangeHandler} value={applicationData.bootcamp ?? ''} placeholder='please enter' className="w-full border border-black-100 bg-gray-100" id="bootcamp">
                                <option value={"none"}>--------</option>
                                {bootcamps.map((bootcamp) => <option key={bootcamp.pk} value={bootcamp.pk}>{bootcamp.name}</option>)}
                            </select>
                        </div>
                        <div className="flex flex-col w-full ">
                            <label htmlFor="status" >Status</label>
                            <select onChange={onChangeHandler} value={applicationData.status ?? ''} placeholder='please enter' className="w-full border border-black-100 bg-gray-100" id="status">
                                <option value={"none"}>--------</option>
                                <option value={"not_serious"}>not serious</option>
                                <option value={"serious"}>serious</option>
                                <option value={"enrolled"}>enrolled</option>
                                <option value={"graduated"}>graduated</option>
                                <option value={"dropped_out"}>dropped out</option>
                                <option value={"found_job"}>found job</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-1/12 h-1/2 flex flex-col place-content-between">
                        <button className="border border-black-300 bg-green-200 w-full" onClick={saveChanges}>SAVE</button>
                        <button className="border border-black-300 bg-red-300 w-full">CANCEL</button>

                    </div>
                </div>
            </div>
            <div className="flex w-full h-3/4">
                <div className="flex flex-col gap-5 w-1/3 p-5">
                    <p className="text-lg font-medium">Application Data</p>
                    <div className="flex flex-col h-5/6">
                        <label htmlFor="applied" >Applied</label>
                        <input onChange={onChangeHandler} value={applicationData.applied ?? ''} placeholder='please enter' typeof="date" className="w-full border border-black-100 bg-gray-100" id="applied" />
                        <label htmlFor="programming_level" >Coding</label>
                        <input onChange={onChangeHandler} value={applicationData.programming_level ?? ''} placeholder='please enter' typeof="text" className="w-full border border-black-100 bg-gray-100" id="programming_level" />
                        <label htmlFor="goal" >Goal</label>
                        <input onChange={onChangeHandler} value={applicationData.goal ?? ''} placeholder='please enter' typeof="text" className="w-full border border-black-300 h-1/2 bg-gray-100" id="goal" />
                        <label htmlFor="how_you_found_us" >How you found us</label>
                        <input onChange={onChangeHandler} value={applicationData.how_you_found_us ?? ''} placeholder='please enter' typeof="text" className="w-full border border-black-100 bg-gray-100" id="how_you_found_us" />
                        <label htmlFor="remote" >Remote</label>
                        <select onChange={onChangeHandler} value={applicationData.remote ?? ''} className="w-full border border-black-100 bg-gray-100" id="status">
                            <option value={"none"}>--------</option>
                            <option value={"yes"}>yes</option>
                            <option value={"no"}>no</option>
                        </select>
                        <label htmlFor="referral_code" >Referral code</label>
                        <input onChange={onChangeHandler} value={applicationData.referral_code ?? ''} placeholder='please enter' typeof="text" className="w-full border border-black-100 bg-gray-100" id="referral_code" />
                    </div>
                </div>
                <div className="flex flex-col w-2/3">
                    <div className="flex w-full h-full">
                        <div className=" flex flex-col gap-5 p-5 w-1/2">
                            <p className="text-lg font-medium">Personal Interview</p>
                            <div className="flex flex-col h-5/6">
                                <div className="flex place-content-between">
                                    <div>
                                        <label htmlFor="personal" >Date</label>
                                        <input onChange={onChangeHandler} value={applicationData.personal === null || applicationData.personal === undefined ? '' : applicationData.personal.slice(0,10)} placeholder='please enter' typeof="date" className="w-full border border-black-100 bg-gray-100" id="personal" />
                                    </div>
                                    <div>
                                        <label htmlFor="personal" >Time</label>
                                        <input onChange={onChangeHandler} value={applicationData.personal === null || applicationData.personal === undefined ? '' : applicationData.personal.slice(11,-1)} placeholder='please enter' typeof="time" className="w-full border border-black-100 bg-gray-100" id="personal" />
                                    </div>
                                </div>
                                <label htmlFor="personal_passed" >Personal passed</label>
                                <select onChange={onChangeHandler} value={applicationData.personal_passed ?? ''} className="w-full border border-black-100 bg-gray-100" id="personal_passed">
                                    <option value={""}>--------</option>
                                    <option value={true}>yes</option>
                                    <option value={false}>no</option>
                                </select>
                                <label htmlFor="personal_comments" >Personal interview comments</label>
                                <input onChange={onChangeHandler} value={applicationData.personal_comments ?? ''} placeholder='please enter' typeof="text" className="w-full border border-black-100 h-1/2 bg-gray-100" id="personal_comments" />
                            </div>




                        </div>
                        <div className="flex flex-col gap-5 p-5 w-1/2">
                            <p className="text-lg font-medium">Technical Interview</p>
                            <div className="flex flex-col h-5/6">
                                <div className="flex place-content-between">
                                    <div>
                                        <label htmlFor="technical" >Date</label>
                                        <input onChange={onChangeHandler} value={applicationData.technical === null || applicationData.technical === undefined ? '' : applicationData.technical.slice(0,10)} placeholder='please enter' typeof="date" className="w-full border border-black-100 bg-gray-100" id="technical" />
                                    </div>
                                    <div>
                                        <label htmlFor="technical" >Time</label>
                                        <input onChange={onChangeHandler} value={applicationData.technical === null || applicationData.technical === undefined ? '' : applicationData.technical.slice(11,-1)} placeholder='please enter' typeof="text" className="w-full border border-black-100 bg-gray-100" id="technical" />
                                    </div>
                                </div>
                                <label htmlFor="technical_passed" >Technical passed</label>
                                <select onChange={onChangeHandler} value={applicationData.technical_passed ?? ''} placeholder='please enter' className="w-full border border-black-100 bg-gray-100" id="technical_passed">
                                    <option value={""}>--------</option>
                                    <option value={true}>yes</option>
                                    <option value={false}>no</option>
                                </select>
                                <label htmlFor="technical_comments" >Technical interview comments</label>
                                <input onChange={onChangeHandler} value={applicationData.technical_comments ?? ''} placeholder='please enter' typeof="text" className="w-full border border-black-100 h-1/2 bg-gray-100" id="technical_comments" />
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full h-1/3">
                        <div className="w-1/2 flex flex-col gap-5 p-5">
                            <div className=" flex place-content-between" >
                                <div className="w-1/3">
                                    <label htmlFor="accepted" >Accepted</label>
                                    <select onChange={onChangeHandler} value={applicationData.accepted ?? ''} placeholder='please enter' className="w-full border border-black-100 bg-gray-100" id="accepted">
                                        <option value={""}>--------</option>
                                        <option value={true}>yes</option>
                                        <option value={false}>no</option>
                                    </select>
                                </div>
                                <div className="w-1/3">
                                    <label htmlFor="preparation_work_access" >Preparation work access</label>
                                    <select onChange={onChangeHandler} value={applicationData.preparation_work_access ?? ''} placeholder='please enter' className="w-full border border-black-100 bg-gray-100" id="preparation_work_access">
                                        <option value={""}>--------</option>
                                        <option value={true}>yes</option>
                                        <option value={false}>no</option>
                                    </select>
                                </div>
                            </div>
                            <div className=" flex place-content-between" >
                                <div className="w-1/3">
                                    <label htmlFor="reserve_tuition_paid" >Deposit</label>
                                    <select onChange={onChangeHandler} value={applicationData.reserve_tuition_paid ?? ''} placeholder='please enter' className="w-full border border-black-100 bg-gray-100" id="reserve_tuition_paid">
                                        <option value={""}>--------</option>
                                        <option value={true}>yes</option>
                                        <option value={false}>no</option>
                                    </select>
                                </div>
                                <div className="w-1/3">
                                    <label htmlFor="paid" >Paid</label>
                                    <select onChange={onChangeHandler} value={applicationData.paid ?? ''} placeholder='please enter' className="w-full border border-black-100 bg-gray-100" id="paid">
                                        <option value={""}>--------</option>
                                        <option value={true}>yes</option>
                                        <option value={false}>no</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col p-5">
                            <label htmlFor="notes" >Notes</label>
                            <input onChange={onChangeHandler} value={applicationData.notes ?? ''} placeholder='please enter' typeof="text" className="w-full border border-black-100 h-full bg-gray-100" id="notes" />
                        </div>
                    </div>

                </div>

            </div>
        </div>


    )
};

export default EditApplication;