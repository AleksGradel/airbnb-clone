import Image from 'next/image'
import Logo from '../public/logo.png'
import { FaSearch, FaGlobe, FaBars, FaUserCircle } from 'react-icons/fa'

function Header() {
  return (
    <div className=' w-full h-20 sticky top-0 inset-x-0 shadow-md z-10'>
      <div className='h-full flex flex-auto flex-row justify-between items-center px-8'>
        <div>
            <Image src={Logo} width={50} height={50} />
        </div>
        <div className='flex justify-between items-center rounded-full border border-grey-light p-1 h-3/5 shadow-sm hover:shadow-md gap-2 cursor-pointer'>
            <span className='pl-4 pr-2 border-r border-grey-light'>Anywhere</span>
            <span className='px-2 border-r border-grey-light'>Any week</span>
            <span className='px-2'>Add guests</span>
            <button className='flex justify-center items-center bg-pink text-white rounded-full w-10 h-10'><FaSearch /></button>
        </div>
        <div className='flex flex-row items-center gap-4 text-grey-dark'>
            <div className='font-bold cursor-pointer rounded-full p-2 hover:bg-grey-super-light'>
                Become a host
            </div>
            <div className='cursor-pointer rounded-full p-2 hover:bg-grey-super-light'>
                <FaGlobe />
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
