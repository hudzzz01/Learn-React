import React, { useRef } from 'react'
import ComonButton from './ComonButton';
import { useNavigate } from 'react-router-dom';

function ButtonDropDown({ text, icon, icon2,list }) {
    const nav = useNavigate()

    const hr = useRef(null);

    const handleClickInput = ()=>{
        nav("/input")
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
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='flex justify-center'>
            <div className= {icon&&text == null ? 'h-20 w-full flex flex-col cursor-pointer' :'h-20 w-full flex flex-col cursor-pointer' } >
                <div className='flex'>
                    <div className='collapse'>
                        <input type="checkbox" />
                        <div className='collapse-title flex'>
                            {text ?

                                <p className='text-xs'>{text}</p>
                                :
                                <>
                                </>
                            }
                            <div>{icon}</div>
                            {icon2 ?
                                <div>
                                    {icon2}
                                </div>

                                :

                                <></>}
                        </div>
                        <div className="collapse-content">
                            <p>Indonesia</p>
                            <p>Inggris</p>
                            {list?
                            <div onClick={handleClickInput} >
                                <ComonButton text={"input job"} />
                            </div>:<></>}
                        </div>
                    </div>



                </div>
                <div
                    id='hr'
                    ref={hr}
                    className='w-full h-1 bg-slate-800 rounded-xl' ></div>


            </div>

        </div >
    )
}

export default ButtonDropDown
