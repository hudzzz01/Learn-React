import React from 'react'

function ComonButton({ text }) {
    return (
        <div className='w-full bg-blue-800 text-white text-sm font-semibold cursor-pointer rounded-sm justify-center flex'>
            <div className='flex flex-col justify-center m-2'>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default ComonButton
