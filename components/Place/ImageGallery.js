import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import { useState, Fragment } from 'react'
import { FaGripVertical, FaAngleLeft, FaRegHeart, FaRegShareSquare } from 'react-icons/fa'
import { urlFor } from '../../sanity'

const SingleImage = ({ src }) => {
  return (
    <Image 
      alt='img'
      src={urlFor(src).url()} 
      layout='responsive'
      objectFit='cover'
      width={100} 
      height={100} />
  )
}

const ImageGallery = ({ mainImage, images }) => {
  const [showImageGallery, setShowImageGallery] = useState(false)

  return (
    <div className='flex h-4/6 my-2 w-full relative'>
      <div className='w-full md:w-1/2 h-1/2 relative p-1'>
        <SingleImage src={mainImage} />
      </div>
      <div className='hidden md:flex flex-wrap relative w-1/2 h-4/6'>
        {images.length >= 4 ? images.slice(0, 4).map((image) => image && (
          <div className='basis-1/2 p-1' key={image._key}>
            <SingleImage src={image} />
          </div>
        )) : null}
      </div>
      { images?.length > 0 &&
        <div className='absolute w-full h-full flex justify-end items-end'>
          <button
            onClick={() => setShowImageGallery(true)}
            className='flex flex-row items-center gap-2 mr-6 mb-6 bg-white py-2 px-4 rounded-lg border border-grey text-sm'>
            <FaGripVertical />
            <span className='font-bold'>Show all photos</span>
          </button>
          <Transition appear show={showImageGallery} as={Fragment}>
              <Dialog as='div' className='relative z-10' onClose={() => setShowImageGallery(false)}>
              <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
              >
                  <div className='fixed inset-0 bg-black bg-opacity-25' />
              </Transition.Child>
              <div className='fixed inset-0 overflow-y-auto'>
                  <div className='flex min-h-full items-center justify-center text-center'>
                  <Transition.Child
                      as={Fragment}
                      enter='ease-out duration-300'
                      enterFrom='opacity-0 scale-95'
                      enterTo='opacity-100 scale-100'
                      leave='ease-in duration-200'
                      leaveFrom='opacity-100 scale-100'
                      leaveTo='opacity-0 scale-95'
                  >
                      <Dialog.Panel className='w-screen min-h-screen transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all'>
                          <div className='flex flex-row justify-between'>
                            <button 
                                className='outline-none text-xl hover:bg-grey-super-light rounded-full px-2'
                                onClick={() => setShowImageGallery(false)}>
                                <FaAngleLeft />
                            </button>
                            <div className='flex flex-row gap-4 text-sm text-grey-dark'>
                              <div className='flex flex-row items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-grey-super-light'>
                                <FaRegShareSquare />
                                <span className='underline underline-offset-1'>Share</span>
                              </div>
                              <div className='flex flex-row items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-grey-super-light'>
                                <FaRegHeart />
                                <span className='underline underline-offset-1'>Save</span>
                              </div>
                            </div>
                          </div>
                          <div className='mx-4 sm:mx-12 md:mx-24 my-4'>
                            <SingleImage src={mainImage} />
                            {images ? images.map((image) => image && (
                              <div className='basis-1/2 p-1' key={image._key}>
                                <SingleImage src={image} />
                              </div>
                            )) : null}
                          </div>
                      </Dialog.Panel>
                  </Transition.Child>
                  </div>
              </div>
              </Dialog>
          </Transition>
        </div>
        
      }
    </div>
  )
}

export default ImageGallery
