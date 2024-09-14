import React from 'react'
import { useDispatch } from 'react-redux'
import { chageSelectedJob } from '../../redux/counter/jobsSlice';

function Jobcard({job}) {
    const dispatch = useDispatch();

    function handleOnClick(job) {
        dispatch(chageSelectedJob(job))
    
    }

    return (
        <div onClick={()=>{handleOnClick(job)}}>

            {/* {console.log(job)} */}
           
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{job.nj}</h2>
                    <p>{job.su}</p>
                    <div>
                        <p>{job.np}</p>
                        <p>{job.s}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Jobcard
