import groq from 'groq'
import { sanityClient } from '../../sanity'
import { FaAngleLeft } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '../../sanity'
import Rating from '../../components/fragments/Rating'
import Separator from '../../components/fragments/Separator'
import { useReservationDetails } from '../../context/ReservationDetailsContext'
import DialogSmall from '../../components/fragments/DialogSmall'
import { useState } from 'react'
import Calendar from '../../components/Place/Calendar'
import { useMediaQuery } from 'react-responsive'
import GuestsSelector from '../../components/fragments/GuestsSelector'

const Reservation = ({ place }) => {
    const {
        dateRange,
        setDateRange,
        checkinDate,
        checkoutDate,
        numberOfNights,
    } = useReservationDetails()
    const { adultsCount, childrenCount, infantsCount } = useReservationDetails()
    const [showDatesEditor, setShowDatesEditor] = useState(false)
    const [showGuestsEditor, setShowGuestsEditor] = useState(false)
    const isSmallDevice = useMediaQuery({ query: '(max-width: 768px)' })

    const totalGuestCount = adultsCount + childrenCount

    return (
        <div className='px-2 sm:px-8 py-10 min-h-screen'>
            <div className='text-md sm:text-3xl flex flex-row items-center gap-4 mb-6'>
                <Link href='/'>
                    <div className='cursor-pointer hover:bg-grey-super-light rounded-full p-2'>
                        <FaAngleLeft />
                    </div>
                </Link>
                <p className='font-bold'>Confirm and pay</p>
            </div>
            <div className='flex flex-col-reverse sm:flex-row items-center gap-4'>
                {isSmallDevice && (
                    <div className='w-full mb-10'>
                        <div className='pb-2 pt-4 px-4'>
                            <h1 className='font-bold text-lg'>Price details</h1>
                        </div>
                        <div className='py-2 px-4 flex flex-row justify-between'>
                            <span className='underline underline-offset-2 decoration-1'>
                                {place.pricePerNight}$ x {numberOfNights} nights
                            </span>
                            <span>{numberOfNights * place.pricePerNight}$</span>
                        </div>
                        <div className='px-4 pt-2 pb-4 flex flex-row justify-between'>
                            <span className='underline underline-offset-2 decoration-1'>
                                Service fee
                            </span>
                            <span>0$</span>
                        </div>
                        <Separator />
                        <div className='px-4 flex justify-between pt-6 font-bold'>
                            <span>Total(USD)</span>
                            <span>{numberOfNights * place.pricePerNight}$</span>
                        </div>
                    </div>
                )}
                <div className='px-4 sm:px-0 w-full sm:w-1/2 self-start'>
                    <div className='mb-6'>
                        <h1 className='text-2xl font-bold mb-6'>Your trip</h1>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-col gap-2'>
                                <span className='font-bold'>Dates</span>
                                <span>
                                    {checkinDate} - {checkoutDate}
                                </span>
                            </div>
                            <div className='self-center'>
                                <span
                                    onClick={() => setShowDatesEditor(true)}
                                    className='cursor-pointer font-bold underline underline-offset-2'
                                >
                                    Edit
                                </span>
                                <DialogSmall
                                    isOpen={showDatesEditor}
                                    closeDialog={() =>
                                        setShowDatesEditor(false)
                                    }
                                >
                                    <>
                                        <div className='mb-2 px-2 h-12'>
                                            {numberOfNights ? (
                                                <div className='flex flex-col'>
                                                    <span className='text-lg font-bold'>
                                                        {numberOfNights}{' '}
                                                        {numberOfNights === 1
                                                            ? 'night'
                                                            : 'nights'}
                                                    </span>
                                                    <div className='text-sm text-grey'>
                                                        <span>
                                                            {place.bedNumber}{' '}
                                                            bed
                                                        </span>
                                                        <span className='px-1'>
                                                            &#183;
                                                        </span>
                                                        <span>
                                                            {
                                                                place.bathroomNumber
                                                            }{' '}
                                                            bath
                                                        </span>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className='flex flex-col'>
                                                    <span className='text-lg font-bold'>
                                                        Select dates
                                                    </span>
                                                    <span className='text-sm text-grey'>
                                                        Add your travel dates
                                                        for exact pricing
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        <Calendar
                                            range={dateRange}
                                            setDateRange={(item) =>
                                                setDateRange([item.selection])
                                            }
                                        />
                                        <div className='w-full flex justify-end'>
                                            <button
                                                onClick={() =>
                                                    setShowDatesEditor(false)
                                                }
                                                className='bg-grey-dark hover:bg-black text-white font-bold px-4 rounded-lg py-1'
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </>
                                </DialogSmall>
                            </div>
                        </div>
                        <div className='mt-4 flex flex-row justify-between'>
                            <div className='flex flex-col gap-2'>
                                <span className='font-bold'>Guests</span>
                                <span>
                                    {totalGuestCount}{' '}
                                    {totalGuestCount > 1 ? 'guests' : 'guest'}
                                    {infantsCount
                                        ? ', ' + infantsCount + ' infants'
                                        : null}
                                </span>
                            </div>
                            <div className='self-center'>
                                <span
                                    onClick={() => setShowGuestsEditor(true)}
                                    className='cursor-pointer font-bold underline underline-offset-2'
                                >
                                    Edit
                                </span>
                                <DialogSmall
                                    isOpen={showGuestsEditor}
                                    closeDialog={() =>
                                        setShowGuestsEditor(false)
                                    }
                                >
                                    <GuestsSelector maxGuestNumber={place.guestNumber} />
                                </DialogSmall>
                            </div>
                        </div>
                    </div>
                    <Separator />
                </div>
                <div className='w-full sm:w-1/2'>
                    <div className='sm:border sm:border-grey-light rounded-lg sm:p-6 sm:m-4'>
                        <div className='flex flex-row mb-4'>
                            <div className='w-1/2 p-2 items-stretch'>
                                <div className='rounded-xl overflow-hidden'>
                                    <Image
                                        alt='Your next dream destination'
                                        src={urlFor(place.mainImage).url()}
                                        layout='responsive'
                                        objectFit='cover'
                                        width={100}
                                        height={100}
                                    />
                                </div>
                            </div>
                            <div className='flex p-2'>
                                <div className='flex flex-col'>
                                    <span className='text-xs text-grey'>
                                        {place.type}
                                    </span>
                                    <span className='text-sm'>
                                        {place.title}
                                    </span>
                                </div>
                                <div className='text-sm self-end flex flex-row gap-1'>
                                    <Rating rates={place.reviews} />
                                    {place.reviews && (
                                        <span className='text-grey'>
                                            ({place.reviews.length})
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <Separator />
                        <div className='py-6'>
                            <span>Your booking is protected</span>
                        </div>
                        <Separator />
                        {!isSmallDevice && (
                            <>
                                <div className='pb-2 pt-4'>
                                    <h1 className='font-bold text-lg'>
                                        Price details
                                    </h1>
                                </div>
                                <div className='py-2 flex flex-row justify-between'>
                                    <span className='underline underline-offset-2 decoration-1'>
                                        {place.pricePerNight}$ x{' '}
                                        {numberOfNights} nights
                                    </span>
                                    <span>
                                        {numberOfNights * place.pricePerNight}$
                                    </span>
                                </div>
                                <div className='pt-2 pb-4 flex flex-row justify-between'>
                                    <span className='underline underline-offset-2 decoration-1'>
                                        Service fee
                                    </span>
                                    <span>0$</span>
                                </div>
                                <Separator />
                                <div className='flex justify-between pt-6 font-bold'>
                                    <span>Total(USD)</span>
                                    <span>
                                        {numberOfNights * place.pricePerNight}$
                                    </span>
                                </div>
                            </>
                        )}
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
            place,
        },
    }
}

export default Reservation
