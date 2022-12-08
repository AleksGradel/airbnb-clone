import { FaGlobe } from 'react-icons/fa'

const LanguageSelector = () => {
    return (
        <div className='cursor-pointer rounded-full p-3 hover:bg-grey-super-light'>
            <a className='text-sm'>
                <FaGlobe />
            </a>
        </div>
    )
}

export default LanguageSelector
