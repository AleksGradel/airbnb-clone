import { FaGithub, FaGlobe,FaDollarSign, FaChevronUp } from 'react-icons/fa'
import Separator from '../fragments/Separator'

const Footer = () => {
  return (
    <div className='bg-grey-super-light border-t border-t-grey-light text-grey text-sm'>
      <div className='p-4 flex flex-col md:flex-row md:justify-between'>
        <div className='flex gap-2 pb-4 md:pb-0 pt-2 md:pt-0'>
            <span>© 2022</span>
            <span>·</span>
            <span className='cursor-pointer hover:underline hover:underline-offset-2'>Privacy</span>
            <span>·</span>
            <span className='cursor-pointer hover:underline hover:underline-offset-2'>Terms</span>
            <span>·</span>
            <span className='cursor-pointer hover:underline hover:underline-offset-2'>Sitemap</span>
            <span>·</span>
            <span className='cursor-pointer hover:underline hover:underline-offset-2'>Destinations</span>
        </div>
        <Separator className='hidden md:flex'/>
        <div className='text-grey-dark font-bold flex gap-6 items-center leading-4 pt-4 md:pt-0'>
            <span className='flex flex-row gap-2 cursor-pointer'>
                <FaGlobe /> English
            </span>
            <span className='flex flex-row gap-2 cursor-pointer'>
                <FaDollarSign /> USD
            </span>
            <span className='flex flex-row gap-2 cursor-pointer'>
                Support and resources <FaChevronUp />
            </span>
        </div>
      </div>
      <Separator />
      <div className='p-4 flex justify-center'>
        <a 
            href='https://github.com/AleksGradel' 
            target='blank' 
            className='flex flex-row'>
            <FaGithub />
            <span className='ml-2 text-xs'>this clone was made for fun </span>
        </a>
      </div>
    </div>
  )
}

export default Footer
