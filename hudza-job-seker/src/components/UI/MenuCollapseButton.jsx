import React from 'react'
import ComonButton from './ComonButton'
import ButtonDropDown from './ButtonDropDown'

function MenuCollapseButton({ languageIcon, bellIcon, downIcon, chatIcon }) {
    return (
        <div>
            <div className="collapse ">
                <input type="checkbox" className='w-full' />
                <div className="collapse-title w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <div className="collapse-content w-full">
                    <div className='flex flex-col justify-center h-20'>
                        <ComonButton text="GET APP" />
                    </div>
                    <div className='flex flex-col justify-center h-20'>
                        <ButtonDropDown text="" icon={languageIcon} icon2={downIcon} />
                    </div>
                    <div className='flex flex-col justify-center h-20'>
                        <ButtonDropDown text="" icon={bellIcon} icon2={null} />
                    </div>
                    <div className='flex flex-col justify-center h-20'>
                        <ButtonDropDown text="" icon={chatIcon} icon2={null} />
                    </div>
                    <div className='flex flex-col justify-center h-50'>
                        <img src="../logo/user.jfif" alt="" className='h-10 w-10 object-cover rounded-full' />
                        <h1>M. Hudzaifah Assyahid</h1>
                        {/* <ButtonDropDown text="M. Hudzaifah Assyahid" icon={null} icon2={downIcon} list={["profile"]} /> */}
                    </div>



                </div>
            </div>
        </div>
    )
}

export default MenuCollapseButton
