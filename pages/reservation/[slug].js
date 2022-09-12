import groq from 'groq'
import { sanityClient } from '../../sanity'
import { FaAngleLeft } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '../../sanity'
import Rating from '../../components/fragments/Rating'
import Separator from '../../components/fragments/Separator'

const Reservation = ({ place }) => {
    return (
        <div className='px-8 py-10 min-h-screen'>
            <div className='text-3xl flex flex-row items-center gap-4 mb-6'>
                <Link href='/'>
                    <div className='cursor-pointer hover:bg-grey-super-light rounded-full p-2'>
                        <FaAngleLeft />
                    </div>
                </Link>
                <p className='font-bold'>Confirm and pay</p>
            </div>
            <div className='flex flex-row items-center gap-4'>
                <div className='w-1/2 self-start'>
                    <div className='mb-6'>
                        <h1 className='text-2xl font-bold mb-6'>Your trip</h1>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-col gap-2'>
                                <span className='font-bold'>Dates</span>
                                <span>dates</span>
                            </div>
                            <div className='self-center'>
                                <span className='cursor-pointer font-bold underline underline-offset-2'>
                                    Edit
                                </span>
                            </div>
                        </div>
                        <div className='mt-4 flex flex-row justify-between'>
                            <div className='flex flex-col gap-2'>
                                <span className='font-bold'>Guests</span>
                                <span>guests</span>
                            </div>
                            <div className='self-center'>
                                <span className='cursor-pointer font-bold underline underline-offset-2'>
                                    Edit
                                </span>
                            </div>
                        </div>
                    </div>
                    <Separator />
                </div>
                <div className='w-1/2'>
                    <div className='border border-grey-light rounded-lg p-6 m-4'>
                        <div className='flex flex-row mb-4'>
                            <div className='w-1/2 p-2 items-stretch'>
                                <div className='rounded-xl overflow-hidden'>
                                    <Image 
                                        alt='Your next dream destination'
                                        src={urlFor(place.mainImage).url()} 
                                        layout='responsive'
                                        objectFit='cover'
                                        width={100}
                                        height={100} />
                                </div>
                            </div>
                            <div className='flex p-2'>
                                <div className='flex flex-col'>
                                    <span className='text-xs text-grey'>{place.type}</span>
                                    <span className='text-sm'>{place.title}</span>
                                </div>
                                <div className='text-sm self-end flex flex-row gap-1'>
                                    <Rating rates={place.reviews} />
                                    { place.reviews &&
                                        <span className='text-grey'>({place.reviews.length})</span>
                                    }
                                </div>
                            </div>
                        </div>
                        <Separator />
                        <div className='py-6'>
                            <span>Your booking is protected</span>
                        </div>
                        <Separator />
                        <div className='py-6'>
                            <h1 className='font-bold'>Price details</h1>
                        </div>
                        <Separator />
                        <div className='py-6 font-bold'>
                            <span>Total(USD)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const placeQuery = groq`
  *[_type == "place" && slug.current == $pageSlug][0] {
    _id,
    title,
    city, 
    state,
    country,
    description,
    mainImage,
    images,
    type,
    slug,
    host,
    pricePerNight,
    bathroomNumber,
    bedNumber,
    bedroomNumber,
    guestNumber,
    geolocation,
    "hostName": host.host->name,
    "hostAvatar": host.host->avatar,
    reviews[] {
      ...,
      author-> {
        _id,
        name,
        avatar
      }  
    }
}`

export async function getServerSideProps(pageContext) {
    const pageSlug = pageContext.query.slug

    const place = await sanityClient.fetch(placeQuery, { pageSlug })
    return {
      props: {
        place
      }
    }
}

export default Reservation
