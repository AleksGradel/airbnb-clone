import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FaChevronRight, FaTimes } from 'react-icons/fa'

const Description = ({ description }) => {
    let [showDescription, setShowDesription] = useState(false)

    return (
        <div className='my-8 flex flex-col'>
            <span className='line-clamp-6 leading-relaxed'>{description}</span>
            <div
                onClick={() => setShowDesription(true)}
                className='flex flex-row items-center mt-4 cursor-pointer'
            >
                <span className='font-bold underline underline-offset-4'>
                    Show more
                </span>
                <FaChevronRight className='ml-2' />
            </div>
            <Transition appear show={showDescription} as={Fragment}>
                <Dialog
                    as='div'
                    className='relative z-10'
                    onClose={() => setShowDesription(false)}
                >
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-black bg-opacity-25' />
                    </Transition.Child>
                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex min-h-full items-center justify-center p-4 text-center'>
                            <Transition.Child
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >
                                <Dialog.Panel
                                    className='max-w-screen md:w-4/5 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'
                                >
                                    <>
                                        <button
                                            onClick={() =>
                                                setShowDesription(false)
                                            }
                                            className='text-xl outline-hidden'
                                        >
                                            <FaTimes />
                                        </button>
                                    </>
                                    <Dialog.Title
                                        as='h3'
                                        className='my-6 text-2xl font-bold'
                                    >
                                        About this space
                                    </Dialog.Title>
                                    <div className='mt-2'>
                                        <p className='leading-relaxed'>
                                            {description}
                                        </p>
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

export default Description
