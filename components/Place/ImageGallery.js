import Image from 'next/image'
import React from 'react'
import { urlFor } from '../../sanity'

const ImageGallery = ({ mainImage, images }) => {
  return (
    <div className='flex h-4/6 my-2'>
      <div className='w-full md:w-1/2 h-1/2 relative p-1'>
        <Image 
          src={urlFor(mainImage).url()} 
          layout='responsive'
          objectFit='cover'
          width={100} 
          height={100} />
      </div>
      <div className='hidden md:flex flex-wrap relative w-1/2 h-4/6'>
        {images ? images.slice(0, 4).map((image) => image && (
          <div className='basis-1/2 p-1' key={image._key}>
            <Image 
              src={urlFor(image).url()} 
              layout='responsive'
              objectFit='cover'
              width={100} 
              height={100} />
          </div>
        )) : null}
      </div>
    </div>
  )
}

export default ImageGallery
