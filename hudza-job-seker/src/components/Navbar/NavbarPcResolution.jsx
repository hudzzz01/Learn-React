import React from 'react'
import MenuButton from '../UI/MenuButton'
import ComonButton from '../UI/ComonButton'
import ButtonDropDown from '../UI/ButtonDropDown'

function NavbarPcResolution({languageIcon,bellIcon,downIcon,chatIcon}) {
  return (
    <div className='w-full h-20 flex flex-col justify-center'>
    <div className='w-full flex justify-between gap-2 pt-2 pb-2 pl-12 pr-0 mt-2 h-20'>


        <div className='w-full flex justify-start gap-7 font-semibold text-xs'>
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

        <div className='w-full flex justify-end'>
            {/* sebelah kanan untuk notifikasi dll dan user butoon */}
            <div className='w-24 h-10 flex flex-col justify-center mt-2'>
                <ComonButton text="GET APP" />
            </div>
            <ButtonDropDown text="" icon={languageIcon} icon2={downIcon} />
            <ButtonDropDown text="" icon={bellIcon} icon2={null} />
            <ButtonDropDown text="" icon={chatIcon} icon2={null} />
            <img src="../logo/user.jfif" alt="" className='h-10 w-10 object-cover rounded-full' />
            <ButtonDropDown text="M. Hudzaifah Assyahid" icon={null} icon2={downIcon} list={true} />
        </div>

    </div>

</div>
  )
}

export default NavbarPcResolution
