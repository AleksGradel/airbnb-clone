import Image from 'next/image'
import React from 'react'
import { urlFor } from '../../sanity'

const ImageGallery = ({ mainImage, images }) => {
  return (
    <div className='flex h-4/6 my-2'>
      <div className='w-1/2 h-4/6 relative p-1'>
        <Image src={urlFor(mainImage).url()} layout='responsive' width={300} height={400} />
      </div>
      <div className='flex flex-wrap relative w-1/2 h-4/6'>
        {images.map((image) => (
          <div className='basis-1/2 p-1' key={image._key}>
            <Image src={urlFor(image).url()} layout='responsive' width={300} height={400} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery
