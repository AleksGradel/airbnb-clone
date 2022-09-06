import Logo from './fragments/Logo'
import Search from './fragments/Search'
import LanguageSelector from './fragments/LanguageSelector'
import User from './fragments/User'
import { useEffect, useRef, useState } from 'react'
import SearchExpanded from './fragments/SearchExpanded'

function Header() {
  const [isExpanded, setIsExpanded] = useState(false)

  const headerRef = useRef(null)

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

  return (
    <div 
      ref={headerRef}
      className={`w-full sticky top-0 inset-x-0 z-10 border-b border-grey-light bg-white
                ${isExpanded ? 'h-40' : 'h-20' } transition-height duration-100 ease-in`}>
      <div className='flex flex-col items-center px-2 sm:px-8'>
        <div className={`w-full h-20 flex flex-auto flex-row items-center
                        ${isExpanded ? 'justify-between' : 'justify-center sm:justify-between'}`}>
          <div className='hidden sm:flex'>
            <Logo />
          </div>
          { !isExpanded 
            ? <Search expandSearch={() => setIsExpanded(true)}/>
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
          <div className='hidden sm:flex flex-row items-center gap-4 text-grey-dark'>
              <div className='text-sm font-bold cursor-pointer rounded-full p-2 hover:bg-grey-super-light'>
                  Become a host
              </div>
              <LanguageSelector />
              <User />
          </div>
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

export default Header
