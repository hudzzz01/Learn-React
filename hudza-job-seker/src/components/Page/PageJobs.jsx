import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs } from '../../redux/counter/jobsSlice';
import Loading from '../UI/Loading';
import Jobcard from '../JobCard/Jobcard';
import JobDetail from '../JobDetail/JobDetail';

function PageJobs() {

    const dispatch = useDispatch()
    const selectedJob = useSelector((state) => state.counter.jobsSlice.selectedJob)
    const widthWindow = useSelector((state) => state.counter.responsiveSlice.resolution).width;

    const allJobs = useSelector(
        (state) => state.counter.jobsSlice.jobs
    )

    useEffect(() => {
        console.log(allJobs)
        if (allJobs.length === 0) {
            dispatch(getAllJobs());
        }


    }, [])

    return (
        <div className='w-full'>
            {console.log(allJobs)}
            {allJobs.length == 0 ? <Loading /> :


                <div className={`${widthWindow > 500 ? 'flex' : 'flex flex-col'} w-full `}>
                    <div className=' flex flex-col pl-2 justify-center gap-2 mt-2 overflow-x-auto'>
                        {/* kiri list job */}
                        <div className={` ${widthWindow > 500 ? ' max-h-screen flex flex-col gap-3' : 'max-h-96 w-full overflow-scroll gap-2'}`}>

                            {allJobs.map((e, i) => (
                                <div>
                                    <Jobcard key={i} job={e} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={` ${widthWindow > 500 ? ' w-4/6' : 'w-full h-full'}`}>
                        {/* kanan keterangan job */}
                        {selectedJob == null ?
                            <>Belum pilih Job</>
                            :
                            <div className='w-full'>


                                <JobDetail job={selectedJob} />

                            </div>}
                    </div>

                </div>


            }

        </div>
    )
}

export default PageJobs
