import Image from 'next/image'
import { urlFor } from '../../sanity'
import Rating from '../fragments/Rating'

const Tile = ({ img, title, price, rates }) => {
  return (
    <div className='cursor-pointer mb-2 md:mb-8 p-1 text-sm'>
      <div className='mb-4 rounded-xl overflow-hidden'>
        <Image 
            alt='Your next dream destination'
            src={urlFor(img).url()} 
            layout='responsive'
            objectFit='cover'
            width={100} 
            height={100} />
      </div>
        <div className='flex flex-row justify-between items-start'>
            <span className='font-bold'>{title}</span>
            <Rating rates={rates} />
        </div>
        <div>
            <span className='font-bold'>${price} </span>
            <span>night</span>
        </div>
      </div>
  )
}

export default Tile
