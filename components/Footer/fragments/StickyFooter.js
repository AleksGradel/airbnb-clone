import Link from "next/link"
import { FaSearch, FaRegHeart, FaRegUserCircle } from "react-icons/fa"

const StickyFooter = () => {
  return (
    <div className='absolute'>
        <div className='w-full z-50 fixed bottom-0 h-16 bg-white border-t border-grey-light 
                        flex justify-center items-center gap-8'>
            <Link href='/'>
                <div className='flex flex-col justify-center'>
                    <span className='text-xl text-pink self-center'><FaSearch /></span>
                    <span className='mt-1 text-xs'>Explore</span>
                </div>
            </Link>
            <div className='flex flex-col justify-center'>
                <span className='text-xl text-grey self-center'><FaRegHeart /></span>
                <span className='mt-1 text-xs'>Wishlists</span>
            </div>
            <Link href='/login'>
                <div className='flex flex-col justify-center'>
                    <span className='text-xl text-grey self-center'><FaRegUserCircle /></span>
                    <span className='mt-1 text-xs'>Log in</span>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default StickyFooter
