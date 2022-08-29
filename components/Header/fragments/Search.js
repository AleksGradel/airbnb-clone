import { FaSearch } from 'react-icons/fa'

function Search({ expandSearch }) {
  return (
    <div
      onClick={expandSearch}
      className='flex justify-between items-center rounded-full border border-grey-light p-1 h-12 shadow-sm hover:shadow-md gap-2 cursor-pointer'>
        <span className='pl-4 pr-2 border-r border-grey-light'>Anywhere</span>
        <span className='px-2 border-r border-grey-light'>Any week</span>
        <span className='px-2'>Add guests</span>
        <button className='flex justify-center items-center bg-pink text-white rounded-full w-9 h-9'><FaSearch /></button>
    </div>
  )
}

export default Search
