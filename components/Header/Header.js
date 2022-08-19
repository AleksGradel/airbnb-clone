import Logo from './fragments/Logo'
import Search from './fragments/Search'
import LanguageSelector from './fragments/LanguageSelector'
import User from './fragments/User'

function Header() {
  return (
    <div className='w-full h-24 sticky top-0 inset-x-0 z-10 border-b border-grey-light bg-white'>
      <div className='h-full flex flex-auto flex-row  justify-center sm:justify-between items-center px-8'>
        <div className='hidden sm:flex'>
          <Logo />
        </div>
        <Search />
        <div className='hidden sm:flex flex-row items-center gap-4 text-grey-dark'>
            <div className='font-bold cursor-pointer rounded-full p-2 hover:bg-grey-super-light'>
                Become a host
            </div>
            <LanguageSelector />
            <User />
        </div>
      </div>
    </div>
  )
}

export default Header
