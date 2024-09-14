import React from 'react'
import { useSelector } from 'react-redux'
import NavbarPcResolution from './NavbarPcResolution'
import NavbarTabResolution from './NavbarTabResolution';
import NavbarPhoneResolution from './NavbarPhoneResolution';
import NavbarPhoneSmallResolution from './NavbarPhoneSmallResolution';

function Navbar() {
    //store from redux

    const widthWindow = useSelector((state) => state.counter.responsiveSlice.resolution).width;

    //

    const languageIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
    </svg>
    const bellIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
    </svg>
    const downIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
    const chatIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
    </svg>




    return (
        <div className='shadow-lg'>
            {widthWindow > 1200 ? (
                // Kondisi ketika widthWindow > 1200
                <NavbarPcResolution languageIcon={languageIcon} bellIcon={bellIcon} downIcon={downIcon} chatIcon={chatIcon} />
            ) : widthWindow > 900 ? (
                // Kondisi ketika 500 < widthWindow <= 900
                // <ComponentB />
                // <>900-700</>
                <NavbarTabResolution languageIcon={languageIcon} bellIcon={bellIcon} downIcon={downIcon} chatIcon={chatIcon} />
                
            ) : widthWindow > 700 ?(
                // Kondisi ketika widthWindow <= 500
                // <ComponentC />
                // <>700-500</>
                <NavbarTabResolution languageIcon={languageIcon} bellIcon={bellIcon} downIcon={downIcon} chatIcon={chatIcon} />
            ) : widthWindow > 500 ?(
                // Kondisi ketika widthWindow <= 500
                // <ComponentC />
                // <>500-300</>
                <NavbarPhoneResolution languageIcon={languageIcon} bellIcon={bellIcon} downIcon={downIcon} chatIcon={chatIcon} />
            ) : (
                // <>300-0</>
                <NavbarPhoneSmallResolution languageIcon={languageIcon} bellIcon={bellIcon} downIcon={downIcon} chatIcon={chatIcon} />
            )}
        </div>
    )
}

export default Navbar
