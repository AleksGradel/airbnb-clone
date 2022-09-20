import { useState, Fragment } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { FaTimes, FaChevronDown } from 'react-icons/fa'
import GuestsSelector from '../fragments/GuestsSelector'
import Separator from '../fragments/Separator'
import { useSelector } from 'react-redux'

const ReservationBoxSmall = ({ checkinDate, checkoutDate, pricePerNight, reserveAction, numberOfNights, totalPrice, maxGuestNumber }) => {
    const [showReservationBox, setShowReservationBox] = useState(false)
    const totalGuestNumber = useSelector((state) => state.guests.total)

    return (
        <div className='absolute'>
            <div className='w-full z-50 fixed bottom-0 h-20 bg-white border-t border-grey-light 
                            flex justify-between items-center px-4'>
                {
                    showReservationBox
                        ? null
                        : <div>
                            <div>
                                <span className='text-lg font-bold'>{pricePerNight}$</span>
                                <span className='ml-1 text-sm'>night</span>
                            </div>
                            <div>
                                <span className='text-xs font-bold underline underline-offset-2'>
                                    {checkinDate} - {checkoutDate}
                                </span>
                            </div>
                        </div>
                }
                <div className={`${showReservationBox ? 'w-full' : ''}`}>
                    { !showReservationBox 
                        ? <button className='bg-pink rounded-lg py-3 px-6 text-white font-bold text-sm' 
                            onClick={() => setShowReservationBox(true)}>
                            Reserve
                        </button>
                        : <button className='w-full bg-pink rounded-lg py-3 px-6 text-white font-bold text-sm' 
                            onClick={reserveAction}>
                            Reserve
                        </button>
                    }
                    <Transition appear show={showReservationBox} as={Fragment}>
                        <Dialog as='div' className='relative z-10' onClose={() => setShowReservationBox(false)}>
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
                            <div className='flex min-h-full items-center justify-center text-center'>
                            <Transition.Child
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >
                                <Dialog.Panel className='w-full max-w-full min-h-screen transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                    <button 
                                        className='outline-none text-xl'
                                        onClick={() => setShowReservationBox(false)}>
                                        <FaTimes />
                                    </button>
                                    <div className='flex flex-col mt-4'>
                                        <h1 className='font-bold text-xl my-4'>Your trip</h1>
                                        <div className='mb-2 border border-grey rounded-lg'>
                                            <div className='flex flex-row text-sm'>
                                                <div className='flex flex-col p-2 w-1/2 border-r border-grey'>
                                                    <span>Check in</span>
                                                    <span>{checkinDate}</span>
                                                </div>
                                                <div className='flex flex-col p-2 w-1/2'>
                                                    <span>Checkout</span>
                                                    <span>{checkoutDate}</span>
                                                </div>
                                            </div>
                                            <Menu as='div' className='relative inline-block w-full'>
                                                <Menu.Button className='inline-flex flex-row justify-between items-center w-full p-2 border-t border-grey text-sm'>
                                                    <div className='flex flex-col'>
                                                        <span className='flex justify-start'>Guests</span>
                                                        { totalGuestNumber > 0 
                                                            ? <span className='text-xs'>{totalGuestNumber} {totalGuestNumber > 1 ? 'guests' : 'guest' }</span>
                                                            : <span className='text-xs'>Add guests</span>
                                                        }
                                                    </div>
                                                    <div>
                                                        <FaChevronDown />
                                                    </div>
                                                </Menu.Button>
                                                <Transition
                                                    as={Fragment}
                                                    enter='transition ease-out duration-100'
                                                    enterFrom='transform opacity-0 scale-95'
                                                    enterTo='transform opacity-100 scale-100'
                                                    leave='transition ease-in duration-75'
                                                    leaveFrom='transform opacity-100 scale-100'
                                                    leaveTo='transform opacity-0 scale-95'>
                                                    <Menu.Items 
                                                        className='absolute right-0 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                                        <div className='p-4 border border-grey-light rounded-md'>
                                                            <GuestsSelector />
                                                            <span className='text-xs'>This place has a maximum of {maxGuestNumber} guests, not including infants.</span>
                                                        </div>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                        <Separator />
                                        <div className='flex flex-row justify-between mt-4 mb-2'>
                                            <span>{pricePerNight}$ x {numberOfNights} nights</span>
                                            <span>{totalPrice}$</span>
                                        </div>
                                        <div className='flex flex-row justify-between mb-4'>
                                            <span>Service fee</span>
                                            <span>0$</span>
                                        </div>
                                        <Separator />
                                        <div className='flex flex-row justify-between my-4 font-bold'>
                                            <span>Total before taxes</span>
                                            <span>{totalPrice}$</span>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                            </div>
                        </div>
                        </Dialog>
                    </Transition>
                </div>
            </div>
        </div>
    )
}

export default ReservationBoxSmall
