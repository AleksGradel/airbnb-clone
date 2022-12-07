import Image from 'next/image'
import { urlFor } from '../../sanity'
import Rating from '../fragments/Rating'

const Tile = ({ img, title, price, rates }) => {
    return (
        <div className='cursor-pointer mb-2 md:mb-8 p-1 text-sm'>
            <div className='mb-4 rounded-xl overflow-hidden relative w-full aspect-square'>
                <Image
                    alt='Your next dream destination'
                    src={urlFor(img).url()}
                    fill
                    objectFit='cover'
                />
            </div>
            <div className='flex flex-row justify-between items-start'>
                <span className='font-bold'>{title}</span>
                <Rating rates={rates} />
            </div>
            <>
                <span className='font-bold'>${price} </span>
                <span>night</span>
            </>
        </div>
    )
}

export default Tile
