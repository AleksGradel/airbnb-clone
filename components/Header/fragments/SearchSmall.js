import { FaSearch, FaSlidersH } from 'react-icons/fa'

const SearchSmall = () => {
  return (
    <div 
        className='flex items-center justify-items-stretch w-full rounded-full border border-grey-light 
        pl-2 md:pl-6 h-12 pr-2 shadow-md text-grey-dark'>
      <div>
        <FaSearch />
      </div>
      <div className='ml-1 md:ml-6 grow text-xs'>
        <div className='font-bold'>Where to?</div>
        <div className='flex gap-1 text-grey'>
            <span>
                Anywhere
            </span>
            <span>·</span>
            <span>
                Any week
            </span>
            <span>·</span>
            <span>
                Add guests
            </span>
        </div>
      </div>
      <div className='border border-grey-light rounded-full p-2'>
        <FaSlidersH />
      </div>
    </div>
  )
}

export default SearchSmall
