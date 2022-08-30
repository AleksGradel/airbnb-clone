import { useState, Fragment } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Menu, Transition } from '@headlessui/react'
import GuestsSelector from '../../fragments/GuestsSelector'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const SearchExpanded = () => {
    const [searchActive, setSearchActive] = useState(false)
    const totalGuestNumber = useSelector((state) => state.guests.total)

    return (
        <div
            onClick={() => setSearchActive(true)}
            className={`flex justify-between items-center text-xs rounded-full border border-grey-light shadow-sm gap-2 cursor-pointer h-16 w-5/6
                ${searchActive ? 'bg-grey-light bg-opacity-60' : 'bg-white'}`}>
            <div className='flex flex-col rounded-full p-4 hover:bg-grey-light'>
                <span className='font-bold'>Where</span>
                <span className='text-grey'>Search destinations</span>
            </div>
            <div className='flex flex-col rounded-full p-4 hover:bg-grey-light'>
                <span className='font-bold'>Check in</span>
                <span className='text-grey'>Add dates</span>
            </div>
            <div className='flex flex-col rounded-full p-4 hover:bg-grey-light'>
                <span className='font-bold'>Check out</span>
                <span className='text-grey'>Add dates</span>
            </div>
            <div className='flex flex-row gap-4 justify-between items-center rounded-full py-1 hover:bg-grey-light'>
                <Menu as='div' className='relative'>
                    <Menu.Button>
                        <div className='flex flex-col px-4'>
                            <span className='font-bold'>Who</span>
                            {totalGuestNumber > 0 
                                ? (
                                    <span className='font-bold'>{totalGuestNumber > 1 ? totalGuestNumber + ' guests' : totalGuestNumber + ' guest'}</span>) 
                                : (
                                    <span className='text-grey'>Add guests</span>
                            )}
                            
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
                        <Menu.Items className='mt-5 absolute w-80 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                            <div className='p-8 rounded-md text-base'>
                                <GuestsSelector />
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
                <Link href='/searchResults'>
                    <div className='flex justify-center items-center bg-pink text-sm text-white rounded-full px-4 h-14 gap-2 font-bold hover:bg-opacity-90 mr-1'>
                        <FaSearch /> Search
                    </div>
                </Link>
            </div>    
        </div>
    )
}

export default SearchExpanded
