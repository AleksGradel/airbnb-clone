import Logo from './fragments/Logo'
import SearchDefault from './fragments/SearchDefault'
import LanguageSelector from './fragments/LanguageSelector'
import User from './fragments/User'
import { useEffect, useRef, useState } from 'react'
import SearchExpanded from './fragments/SearchExpanded'
import { useRouter } from 'next/router'
import { useMediaQuery } from 'react-responsive'
import SearchSmall from './fragments/SearchSmall'
import Link from 'next/link'
import { FaAngleLeft, FaRegHeart, FaRegShareSquare } from 'react-icons/fa' 

function Header() {
  const [isExpanded, setIsExpanded] = useState(false)
  const router = useRouter()
  const headerRef = useRef(null)
  const isSmallDevice = useMediaQuery({ query: '(max-width: 768px)'})

  const handleClickOutsideHeader = (e) => {
    if ((headerRef.current) && !headerRef.current.contains(e.target)) {
      setIsExpanded(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click' , handleClickOutsideHeader, true)
    return () => {
      document.removeEventListener('click', handleClickOutsideHeader, true)
    }
  }, [])

  const DefaultHeader = () => {
    return (
      <div 
        ref={headerRef}
        className={`${isExpanded ? 'h-40' : 'h-20' } transition-height duration-100 ease-in`}>
        <div className='flex flex-col items-center px-2 sm:px-8'>
          <div className={`w-full h-20 flex flex-auto flex-row items-center
                          ${isExpanded ? 'justify-between' : 'justify-center sm:justify-between'}`}>
            <div className='hidden sm:flex'>
              <Logo />
            </div>
            { router.pathname === '/reservation/[slug]'
              ? null
              : !isExpanded 
                ? <SearchDefault expandSearch={() => setIsExpanded(true)}/>
                : (<div className='flex flex-row justify-center content-center gap-12 text-sm'>
                    <div>
                      <span className='font-bold cursor-pointer underline underline-offset-8'>Stays</span>
                    </div>
                    <div>
                      <span className='font-bold cursor-pointer hover:text-grey hover:underline hover:underline-offset-8'>
                        Experiences
                      </span>
                    </div>
                    <div>
                      <span className='font-bold cursor-pointer hover:text-grey hover:underline hover:underline-offset-8'>
                        Online Experiences
                      </span>
                    </div>
                  </div>)
            }
            {
              router.pathname !== '/reservation/[slug]'
              ? (
                <div className='hidden sm:flex flex-row items-center gap-4 text-grey-dark'>
                  <div className='text-sm font-bold cursor-pointer rounded-full p-2 hover:bg-grey-super-light'>
                      Become a host
                  </div>
                  <LanguageSelector />
                  <User />
                </div>
              )
              : null
            }
          </div>
          { isExpanded && 
            <div className='flex flex-col h-1/2 justify-center w-full'>
              <div className='flex justify-center'>
                <SearchExpanded />
              </div>
            </div>
          }
        </div>
      </div>
    )
  }

  const SmallHeader = () => {
    return (
      <div className={`${router.pathname === '/place/[slug]' ? 'h-14 px-4' : 'h-20 px-8'} py-4 flex w-full`}>
        {
          router.pathname !== '/place/[slug]'
            ? <SearchSmall />
            : <div className='flex flex-row w-full justify-between items-center'>
                <div>
                  <Link href='/'>
                      <div className='cursor-pointer hover:bg-grey-super-light rounded-full p-2 text-lg'>
                          <FaAngleLeft />
                      </div>
                  </Link>
                </div>
                <div className='flex flex-row gap-2 text-lg text-grey'>
                  <span className='cursor-pointer hover:bg-grey-super-light rounded-full p-2'><FaRegShareSquare /></span>
                  <span className='cursor-pointer hover:bg-grey-super-light rounded-full p-2'><FaRegHeart /></span>
                </div>
              </div>
        }
      </div>
    )
  }

  return (
    <div className='w-full sticky top-0 inset-x-0 z-10 border-b border-grey-light  bg-white'>
      { isSmallDevice 
        ? router.pathname === '/login' || router.pathname === '/signin'
          ? null
          : <SmallHeader />
        : <DefaultHeader />
      }
    </div>
  )
}

export default Header
