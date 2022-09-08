import { Menu, Transition  } from '@headlessui/react'
import { FaStar, FaChevronDown } from 'react-icons/fa'
import Separator from '../fragments/Separator'
import GuestsSelector from '../fragments/GuestsSelector'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Rating from '../fragments/Rating'

function ReservationBox({ pricePerNight, checkinDate, reserveAction, checkoutDate, reviewsCount, numberOfNights, totalPrice, rates, maxGuestNumber }) {
    const totalGuestNumber = useSelector((state) => state.guests.total)

    return (
    <div className='border border-grey-light rounded-lg shadow-md m-4 p-6'>
      <div className='flex flex-col'>
        <div className='flex flex-col lg:flex-row justify-between'>
            <div>
                <span className='font-bold'>${pricePerNight} </span>
                <span>night</span>
            </div>
            <div className='flex flex-row mb-4 gap-2'>
                <Rating rates={rates} />
                <span className='text-grey underline decoration-1'>{reviewsCount}</span>
            </div>
        </div>
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
        { numberOfNights ? (
            <div>
                <div className='my-2 flex flex-col'>
                    <button
                        onClick={reserveAction}
                        className='bg-pink rounded-lg py-3 text-white font-bold'>
                        Reserve
                    </button>
                    <span className='flex justify-center my-4 text-sm text-grey'>You wont be charged yet</span>
                </div>
                <div className='flex justify-between mb-2'>
                    <span className='underline decoration-1'>${pricePerNight} x ${numberOfNights} nights</span>
                    <span>${totalPrice}</span>
                </div>
                <div className='flex justify-between mb-4'>
                    <span className='underline decoration-1'>Service fee</span>
                    <span>$0</span>
                </div>
                <Separator />
                <div className='flex justify-between mt-4 mb-2 font-bold'>
                    <span>Total before taxes</span>
                    <span>${totalPrice}</span>
                </div>
            </div>
        ) : null }
      </div>
    </div>
  )
}

export default ReservationBox
