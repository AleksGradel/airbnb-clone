import { Dialog, Transition } from '@headlessui/react'
import { FaGlobe, FaTimes } from 'react-icons/fa'
import { useState, Fragment } from 'react'

const LanguageSelector = () => {
    const [showLanguageSelector, setLanguageSelector] = useState(false)

    return (
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
    )
}

export default LanguageSelector
