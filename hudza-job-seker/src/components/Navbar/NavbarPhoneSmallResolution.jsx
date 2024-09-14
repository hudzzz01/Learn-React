import React from 'react'
import MenuButton from '../UI/MenuButton'
import ComonButton from '../UI/ComonButton'
import ButtonDropDown from '../UI/ButtonDropDown'
import MenuCollapseButton from '../UI/MenuCollapseButton'

function NavbarPhoneSmallResolution({ languageIcon, bellIcon, downIcon, chatIcon }) {
    return (
        <div className='w-full h-20 flex flex-col justify-center'>
            <div className='w-full flex flex-col justify-between gap-1 pt-2 pl-1 pr-20 pb-2 mt-2 h-20'>


                <div className='w-full flex justify-start gap-0 font-semibold text-xs'>
                    {/* sebelah kiri untuk logo dan menu */}
                    <img src="logo/logo.png" alt="temp" className='w-8 h-8 rounded-full object-cover' />
                    <div className='flex flex-col h-full'>
                        <div className='flex gap-3'>
                            <MenuButton text="JOBS" />
                            <MenuButton text="COMPANIES" />
                            <MenuButton text="BLOG" />
                            <MenuButton text="EXPERTCLASS" />
                        </div>
                    </div>


                </div>



                <div className='w-full flex'>
                    {/* sebelah bawah untuk notifikasi dll dan user butoon */}
                    <MenuCollapseButton languageIcon={languageIcon} bellIcon={bellIcon} downIcon={downIcon} chatIcon={chatIcon} />

                </div>

            </div>

        </div>
    )
}

export default NavbarPhoneSmallResolution
