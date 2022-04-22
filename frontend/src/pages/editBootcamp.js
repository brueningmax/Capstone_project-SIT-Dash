

const EditBootcamp = () => {
    return(
        <div className="flex flex-col w-full p-5">
            <div><p className="text-lg font-medium">Bootcamp data</p></div>
            <div className="flex place-content-between pt-5">
                <div className="flex w-1/2 gap-20">
                    <div className=" flex flex-col gap-5 w-1/3">

                        <div className="flex flex-col">
                            <label htmlFor="name" >Name</label>
                            <input typeof="text" className="w-full border border-black-100 bg-gray-100" id="name"/>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="bootcamp_type" >Bootcamp-type</label>
                            <select className="w-full border border-black-100 bg-gray-100" id="bootcamp_type">
                                <option value={"none"}>--------</option>
                                <option value={"yes"}>yes</option>
                                <option value={"no"}>no</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="bootcamp_location" >Bootcamp location</label>
                            <select className="w-full border border-black-100 bg-gray-100" id="bootcamp_location">
                                <option value={"none"}>--------</option>
                                <option value={"yes"}>yes</option>
                                <option value={"no"}>no</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="early_apply_by" >Early apply by:</label>
                            <input typeof="text" className="w-full border border-black-100 bg-gray-100" id="early_apply_by"/>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="apply_by" >Apply by:</label>
                            <input typeof="text" className="w-full border border-black-100 bg-gray-100" id="apply_by"/>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="start_date" >Start date:</label>
                            <input typeof="text" className="w-full border border-black-100 bg-gray-100" id="start_date"/>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="end_date" >End date:</label>
                            <input typeof="text" className="w-full border border-black-100 bg-gray-100" id="end_date"/>
                        </div>

                    </div>
                    <div className=" flex flex-col gap-5">
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-5 border border-black-100 bg-gray-100" id="active"/>
                            <label htmlFor="active" >Active</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-5 border border-black-100 bg-gray-100" id="is_part_time"/>
                            <label htmlFor="is_part_time" >Is part time</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-5 border border-black-100 bg-gray-100" id="is_in_person"/>
                            <label htmlFor="is_in_person" >Is in person</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-5 border border-black-100 bg-gray-100" id="Is remote"/>
                            <label htmlFor="Is remote" >Is remote</label>
                        </div>
                    </div>
                </div>
                <div className="h-1/4 w-1/5 flex flex-col gap-5">
                    <button className="border border-black-300 bg-green-200 w-4/5">SAVE</button>
                    <button className="border border-black-300 bg-red-300 w-4/5">CANCEL</button>
                </div>
            </div>
        </div>
    )
};

export default EditBootcamp