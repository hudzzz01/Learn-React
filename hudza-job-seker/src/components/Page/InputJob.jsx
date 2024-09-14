import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { postJobs, putJobs,deleteJobs } from '../../redux/counter/jobsSlice';



function InputJob({ isEdit }) {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const refEdit = useRef(isEdit);
    //oldDAta
    let oldData = {};

    const formInput = useRef(null);
    

    if(isEdit){
        const {id} = useParams()
        const allJobs = useSelector(
            (state) => state.counter.jobsSlice.jobs
        )
        const newAllJobs = [...allJobs];
        newAllJobs.forEach(e => {
            e.id == id ? oldData = e : null
        });
        
    }

    const handleClickDelete = ()=>{
        const formData = new FormData(formInput.current);

        // Membuat objek untuk menampung key-value form data
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // console.log(data.id)

        dispatch(deleteJobs(data.id))
        nav("/")

        
    }

    const handleClickSubmit = () => {
        console.log(formInput.current)
        const formData = new FormData(formInput.current);

        // Membuat objek untuk menampung key-value form data
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Log key-value dari form data
        // console.log(refEdit.current,data);
        
        if(isEdit == true){
            console.log("ini edit");
            dispatch(putJobs(data))
            nav("/")
            return
        }
        // console.log("ini post", data);

        // return

        dispatch(postJobs(data));
        nav("/")


    }


    return (
        <div>
            {isEdit ?

                <div>
                    <div className='flex justify-center p-5 w-full'>
                        <form ref={formInput} action="" className='w-full flex flex-col gap-8' >
                            <div className='btn bg-red-600 text-white' onClick={handleClickDelete} >Delete</div>
                            <div className='text-center text-xl font-bold m-10' >Edit Job</div>

                            <input type="hidden" value={oldData.id} name='id' />


                            <div className='flex flex-col gap-2'>
                                <h1>id : {oldData.id}</h1>
                                <label className="input input-bordered flex items-center gap-2">
                                    {/* svg */}
                                    <input type="text" className="grow" placeholder="Nama Pekerjaan" name='nama_job' defaultValue={oldData.nj} />
                                </label>
                            </div>
                            <div className='flex flex-col gap-2'>
                                
                                <label className="input input-bordered flex items-center gap-2">
                                    {/* svg */}
                                    <input type="text" className="grow" placeholder="Tipe Pekerjaan" name='type_job' defaultValue={oldData.nj} />
                                </label>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className="input input-bordered flex items-center gap-2">
                                    {/* svg */}
                                    <input type="text" className="grow" placeholder="Nama Company" name='nama_perusahaan' defaultValue={oldData.np} />
                                </label>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className="input input-bordered flex items-center gap-2">
                                    {/* svg */}
                                    <input type="text" className="grow" placeholder="Level" name='level_job' defaultValue={oldData.lj} />
                                </label>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className="input input-bordered flex items-center gap-2">
                                    {/* svg */}
                                    <input type="text" className="grow" placeholder="Masa Kerja" name='masa_kerja' defaultValue={oldData.mk} />
                                </label>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className="input input-bordered flex items-center gap-2">
                                    {/* svg */}
                                    <input type="text" className="grow" placeholder="Status Urgent" name='status_urgent' defaultValue={oldData.su} />
                                </label>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className="input input-bordered flex items-center gap-2">
                                    {/* svg */}
                                    <input type="text" className="grow" placeholder="Gaji" name='salary' defaultValue={oldData.s} />
                                </label>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className="input input-bordered flex items-center gap-2">
                                    {/* svg */}
                                    <input type="text" className="grow" placeholder="Deskripsi" name='deskripsi_perusahaan' defaultValue={oldData.dp} />
                                </label>
                            </div>
                            <div className='flex flex-col justify-center' >
                                <div className='btn' onClick={handleClickSubmit} > Submit </div>
                            </div>
                        </form>
                    </div>

                </div>

                :

                <div>
                    <div className='flex justify-center p-5 w-full'>
                        <form ref={formInput} action="" className='w-full flex flex-col gap-8' >
                            <div className='text-center text-xl font-bold m-10' >Input Job</div>


                            <div className='flex flex-col gap-2'>
                                <label className="input input-bordered flex items-center gap-2">
                                    {/* svg */}
                                    <input type="text" className="grow" placeholder="Nama Pekerjaan" name='nama_job' />
                                </label>
                            </div>
                            <div className='flex flex-col gap-2'>
                              
                                <label className="input input-bordered flex items-center gap-2">
                                    {/* svg */}
                                    <input type="text" className="grow" placeholder="Tipe Pekerjaan" name='type_job' defaultValue={oldData.nj} />
                                </label>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className="input input-bordered flex items-center gap-2">
                                    {/* svg */}
                                    <input type="text" className="grow" placeholder="Nama Company" name='nama_perusahaan' />
                                </label>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className="input input-bordered flex items-center gap-2">
                                    {/* svg */}
                                    <input type="text" className="grow" placeholder="Level" name='level_job' />
                                </label>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className="input input-bordered flex items-center gap-2">
                                    {/* svg */}
                                    <input type="text" className="grow" placeholder="Masa Kerja" name='masa_kerja' />
                                </label>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className="input input-bordered flex items-center gap-2">
                                    {/* svg */}
                                    <input type="text" className="grow" placeholder="Status Urgent" name='status_urgent' />
                                </label>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className="input input-bordered flex items-center gap-2">
                                    {/* svg */}
                                    <input type="text" className="grow" placeholder="Gaji" name='salary' />
                                </label>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className="input input-bordered flex items-center gap-2">
                                    {/* svg */}
                                    <input type="text" className="grow" placeholder="Deskripsi" name='deskripsi_perusahaan' />
                                </label>
                            </div>
                            <div className='flex flex-col justify-center' >
                                <div className='btn' onClick={handleClickSubmit} > Submit </div>
                            </div>
                        </form>
                    </div>

                </div>


            }

        </div>


    )
}

export default InputJob
