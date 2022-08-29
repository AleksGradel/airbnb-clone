import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchExpanded = () => {
    const [searchActive, setSearchActive] = useState(false)

    return (
        <div
            onClick={() => setSearchActive(true)}
            className={`flex justify-between rounded-full border border-grey-light shadow-sm gap-2 cursor-pointer h-16 w-5/6
                ${searchActive ? 'bg-grey-light bg-opacity-60' : 'bg-white'}`}>
            <div className='flex flex-col text-xs rounded-full px-4 h-16 hover:bg-grey-light'>
                <span className='font-bold'>Where</span>
                <span className='text-grey'>Search destinations</span>
            </div>
            <div className='flex flex-col text-xs rounded-full px-4 h-16 hover:bg-grey-light'>
                <span className='font-bold'>Check in</span>
                <span className='text-grey'>Add dates</span>
            </div>
            <div className='flex flex-col text-xs rounded-full px-4 h-16 hover:bg-grey-light'>
                <span className='font-bold'>Check out</span>
                <span className='text-grey'>Add dates</span>
            </div>
            <div className='flex flex-col text-xs rounded-full px-4 h-16 hover:bg-grey-light'>
                <span className='font-bold'>Who</span>
                <span className='text-grey'>Add guests</span>
            </div>
            <button className='flex justify-center items-center bg-pink text-white rounded-full px-4 h-14 gap-2 font-bold hover:bg-opacity-90'><FaSearch /> Search</button>
        </div>
    )
}

export default SearchExpanded
