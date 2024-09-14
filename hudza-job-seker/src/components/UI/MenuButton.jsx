import React, { useRef } from 'react'
import '../UI/css/MenuButton.css'
import { useNavigate } from 'react-router-dom';
function MenuButton({ text }) {
    const hr = useRef(null);
    const nav = useNavigate()

    const handleOnClick = () =>{
        switch (text) {
            case "JOBS":
                nav("/")
                break;
        
            default:
                break;
        }
    }

    const handleMouseEnter = () => {
        if (hr.current) {
            hr.current.classList.add('fadeIn');
            hr.current.classList.remove('fadeOut');
            hr.current.style.display = "block"
            // console.log(hr.current)
        }
    }
    const handleMouseLeave = () => {
        if (hr.current) {
            // hr.current.classList.remove('fadeIn');
            hr.current.classList.add('fadeOut');
            // console.log(hr.current)
        }
    }

    return (

        <div
            onClick={handleOnClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='flex justify-center'>
            <div className='h-10 mt-2 w-full flex flex-col cursor-pointer'>
                <p>{text}</p>
                <div
                    id='hr'
                    ref={hr}
                    className='w-full h-1 bg-slate-800 rounded-xl'></div>
            </div>
        </div>
    )
}

export default MenuButton
