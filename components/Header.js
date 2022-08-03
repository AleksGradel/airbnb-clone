import Image from 'next/image'
import Logo from '../public/logo.png'
import { FaSearch, FaGlobe, FaBars, FaUserCircle } from 'react-icons/fa'
import { Dialog } from '@headlessui/react'
import { useState } from 'react'

function Header() {
  const [showLanguageSelector, setLanguageSelector] = useState(false)

  return (
    <div className='w-full h-24 sticky top-0 inset-x-0 z-10 border-b border-grey-light'>
      <div className='h-full flex flex-auto flex-row justify-between items-center px-8'>
        <div>
            <Image src={Logo} width={40} height={40} alt="Airbnb" />
        </div>
        <div className='flex justify-between items-center rounded-full border border-grey-light p-1 h-1/2 shadow-sm hover:shadow-md gap-2 cursor-pointer'>
            <span className='pl-4 pr-2 border-r border-grey-light'>Anywhere</span>
            <span className='px-2 border-r border-grey-light'>Any week</span>
            <span className='px-2'>Add guests</span>
            <button className='flex justify-center items-center bg-pink text-white rounded-full w-9 h-9'><FaSearch /></button>
        </div>
        <div className='flex flex-row items-center gap-4 text-grey-dark'>
            <div className='font-bold cursor-pointer rounded-full p-2 hover:bg-grey-super-light'>
                Become a host
            </div>
            <div className='cursor-pointer rounded-full p-2 hover:bg-grey-super-light'>
                <a onClick={() => setLanguageSelector(true)}>
                  <FaGlobe />
                </a>
                <Dialog open={showLanguageSelector} onClose={() => setLanguageSelector(false)}>
                  <Dialog.Panel>
                    <Dialog.Title>Deactivate account</Dialog.Title>
                    <Dialog.Description>
                      This will permanently deactivate your account
                    </Dialog.Description>

                    <p>
                      Are you sure you want to deactivate your account? All of your data
                      will be permanently removed. This action cannot be undone.
                    </p>

                    <button onClick={() => setLanguageSelector(false)}>Deactivate</button>
                    <button onClick={() => setLanguageSelector(false)}>Cancel</button>
                  </Dialog.Panel>
                </Dialog>
            </div>
            <div className='flex justify-between items-center p-1 gap-3 rounded-full border border-grey-light h-10 hover:shadow-md cursor-pointer'>
                <FaBars className='ml-2'/>
                <FaUserCircle className='text-grey text-3xl'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
