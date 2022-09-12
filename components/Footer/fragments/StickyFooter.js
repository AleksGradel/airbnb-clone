import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaSearch, FaRegHeart, FaRegUserCircle } from 'react-icons/fa'

const StickyFooter = () => {
    const router = useRouter()

    return (
        <div className='absolute'>
            <div className='w-full z-50 fixed bottom-0 h-16 bg-white border-t border-grey-light 
                            flex justify-center items-center gap-10'>
                <Link href='/'>
                    <div className='flex flex-col justify-center cursor-pointer'>
                        <span className={`${router.pathname === '/' ? 'text-pink' : 'text-grey'} text-xl self-center`}><FaSearch /></span>
                        <span className='mt-1 text-xs'>Explore</span>
                    </div>
                </Link>
                <div className='flex flex-col justify-center cursor-pointer'>
                    <span className='text-xl text-grey self-center'><FaRegHeart /></span>
                    <span className='mt-1 text-xs'>Wishlists</span>
                </div>
                <Link href='/login'>
                    <div className='flex flex-col justify-center cursor-pointer'>
                        <span className={`${router.pathname === '/login' || router.pathname === '/signin'  ? 'text-pink' : 'text-grey'} text-xl self-center`}><FaRegUserCircle /></span>
                        <span className='mt-1 text-xs'>Log in</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default StickyFooter
