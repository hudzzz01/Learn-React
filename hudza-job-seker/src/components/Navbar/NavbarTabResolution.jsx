import React from 'react'
import MenuButton from '../UI/MenuButton'
import ComonButton from '../UI/ComonButton'
import ButtonDropDown from '../UI/ButtonDropDown'
import MenuCollapseButton from '../UI/MenuCollapseButton'

function NavbarTabResolution({languageIcon,bellIcon,downIcon,chatIcon}) {
  return (
    <div className='w-full h-20 flex flex-col justify-center'>
    <div className='w-full flex justify-between gap-2 pt-2 pb-2 pl-20 pr-0 mt-2 h-20'>


        <div className='w-full flex justify-center gap-7 font-semibold text-xs'>
            {/* sebelah kiri untuk logo dan menu */}
            <img src="logo/logo.png" alt="temp" className='w-14 h-14 rounded-full object-cover' />
            <div className='flex flex-col h-full justify-center'>
                <div className='flex gap-7'>
                    <MenuButton text="JOBS" />
                    <MenuButton text="COMPANIES" />
                    <MenuButton text="BLOG" />
                    <MenuButton text="EXPERTCLASS" />
                </div>
            </div>


        </div>
   
        

        <div className='w-72 flex justify-end'>
            {/* sebelah kanan untuk notifikasi dll dan user butoon */}
            <MenuCollapseButton languageIcon={languageIcon} bellIcon={bellIcon} downIcon={downIcon} chatIcon={chatIcon} />
         
        </div>

    </div>

</div>
  )
}

export default NavbarTabResolution
