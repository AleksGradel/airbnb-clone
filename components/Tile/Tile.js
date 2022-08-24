import Image from 'next/image'
import { urlFor } from '../../sanity'

const Tile = ({ img, title, price }) => {
  return (
    <div className='cursor-pointer mb-8'>
      <div className='mb-4 rounded-md overflow-hidden'>
        <Image 
            alt='Your next dream destination'
            src={urlFor(img).url()} 
            layout='responsive'
            objectFit='cover'
            width={100} 
            height={100} />
      </div>
        <div className='flex flex-row justify-between'>
            <span className='font-bold'>{title}</span>
            <span>Ocena</span>
        </div>
        <div>
            <span>Data</span>
        </div>
        <div>
            <span className='font-bold'>${price} </span>
            <span>night</span>
        </div>
      </div>
  )
}

export default Tile
