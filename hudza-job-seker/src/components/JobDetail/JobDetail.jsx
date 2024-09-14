import React from 'react'
import ComonButton from '../UI/ComonButton'
import { useNavigate } from 'react-router-dom'

function JobDetail({ job }) {
  const navigate = useNavigate();

  function hanldeClickEdit(id){
    navigate(`/edit/${id}`)
  }


  return (
    <div className='flex flex-col justify-center text-center w-full' >
      <div className='p-20'>
        <div className='text-sm font-semibold' > ID : {job.id}</div>
        <div className='text-lg font-bold'> Nama Pekerjaan :  {job.nj}</div>
        <div> Company : {job.np}</div>
        <div> Level : {job.lj}</div>
        <div> Masa Kerja : {job.mk}</div>
        <div> Status : {job.su}</div>
        <div> Gaji : {job.s}</div>

        <div>
          <ComonButton text={"Apply now"} />
        </div>
        <div> Deskripsi :</div>
        <div> {job.dp}</div>
        <div onClick={()=>{hanldeClickEdit(job.id)}} >
          <ComonButton text={"Edit"} />
        </div>
      </div>

    </div>

  )
}

export default JobDetail
