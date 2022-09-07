import { FaSearch } from 'react-icons/fa'

function SearchDefault({ expandSearch }) {
  return (
    <div
      onClick={expandSearch}
      className='flex justify-between items-center rounded-full border border-grey-light p-1 h-12 shadow-sm hover:shadow-md gap-2 cursor-pointer'>
        <span className='text-sm pl-4 pr-2 border-r border-grey-light'>Anywhere</span>
        <span className='text-sm px-2 border-r border-grey-light'>Any week</span>
        <span className='text-sm px-2'>Add guests</span>
        <button className='flex justify-center items-center bg-pink text-white rounded-full w-10 h-10'><FaSearch /></button>
    </div>
  )
}

export default SearchDefault
