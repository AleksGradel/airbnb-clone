import Image from 'next/image'
import Logo from '../public/logo.png'
import { FaSearch, FaGlobe, FaBars, FaUserCircle, FaTimes } from 'react-icons/fa'
import { Dialog, Transition } from '@headlessui/react'
import { useState, Fragment } from 'react'

function Header() {
  const [showLanguageSelector, setLanguageSelector] = useState(false)

  return (
    <div className='w-full h-24 sticky top-0 inset-x-0 z-10 border-b border-grey-light bg-white'>
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
                <Transition appear show={showLanguageSelector} as={Fragment}>
                  <Dialog 
                    as="div" 
                    className="relative z-10" 
                    open={showLanguageSelector} 
                    onClose={() => setLanguageSelector(false)}>
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                      </Transition.Child>
                      <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95">
                            <Dialog.Panel className='flex flex-col bg-white p-4 rounded-md'>
                              <button 
                                className='rounded-full p-2 hover:bg-grey-super-light w-8'
                                onClick={() => setLanguageSelector(false)}>
                                <FaTimes />
                              </button>
                              <div className='p-6 flex flex-col gap-4'>
                                <Dialog.Title className='flex font-bold'>Language and region</Dialog.Title>
                                <hr className='border-xs border-grey' />
                                <Dialog.Description className='text-xl font-bold'>
                                  Choose a language and region
                                </Dialog.Description>
                                <div className='flex flex-row gap-4'>
                                  <div className='rounded-md p-4 hover:bg-grey-super-light'>
                                    Polski
                                  </div>
                                  <div className='rounded-md p-4 hover:bg-grey-super-light'>
                                    English
                                  </div>
                                </div>
                              </div>
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>  
                  </Dialog>
                </Transition>
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
