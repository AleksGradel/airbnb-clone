import { sanityClient } from '../../sanity'
import groq from 'groq'
import ImageGallery from '../../components/Place/ImageGallery'
import Separator from '../../components/fragments/Separator'
import Avatar from '../../components/fragments/Avatar'
import ReservationBox from '../../components/Place/ReservationBox'
import Description from '../../components/Place/Description'
import Calendar from '../../components/Place/Calendar'
import LocationMap from '../../components/Place/LocationMap'
import Reviews from '../../components/Place/Reviews'
import { useAuth } from '../../context/AuthContext'
import { useRouter } from 'next/router'
import { useMediaQuery } from 'react-responsive'
import ReservationBoxSmall from '../../components/Place/ReservationBoxSmall'
import { useDates } from '../../context/DatesContext'
import format from 'date-fns/format'

const Place = ({ place }) => {
    const { user } = useAuth() 
    const { dateRange, setDateRange, checkinDate, checkoutDate, numberOfNights } = useDates()
    const router = useRouter()

    const isSmallDevice = useMediaQuery({ query: '(max-width: 768px)'})

    const handleReservation = () => {
      user 
      ? router.push(`/reservation/${place.slug.current}`)
      : alert('Please, login to continue')
    }

    return (
        <div>
          <div className='px-2 sm:px-12 xl:px-24 pt-4'>
              <p className='text-2xl font-bold'>{place.title}</p>
              <div>
                <ImageGallery mainImage={place.mainImage} images={place.images} />
              </div>
              <div className='flex'>
                <div className='basis-full md:basis-7/12'>
                  <div className='flex justify-between my-4'>
                    <div>
                      <h2 className='text-xl font-bold'>{place.type} hosted by {place.hostName}</h2>
                      <div className='inline-block mt-1'>
                        {place.guestNumber} { place.guestNumber > 1 ? 'guests' : 'guest' } &#183;&nbsp;
                        {place.bedroomNumber} { place.bedroomNumber > 1 ? 'bedrooms' : 'bedroom' } &#183;&nbsp; 
                        {place.bedNumber} { place.bedNumber > 1 ? 'beds' : 'bed' } &#183;&nbsp;
                        {place.bedroomNumber} { place.bedroomNumber > 1 ? 'baths' : 'bath' }
                      </div>
                    </div>
                    <div>
                      <Avatar image={place.hostAvatar} alt={place.hostName} />
                    </div>
                  </div>
                  <Separator />
                  <Description description={place.description} />
                  <Separator />
                  <div className='my-8'>
                    <h2 className='text-xl font-bold mb-4'>{numberOfNights} nights in {place.city}</h2>
                    <p className='text-grey mb-4'>{format(dateRange[0].startDate, "MM/dd/yyyy")} to {format(dateRange[0].endDate, "MM/dd/yyyy")}</p>
                    <Calendar 
                      range={dateRange} 
                      setDateRange={item => setDateRange([item.selection])} />
                  </div>
                </div>
                { isSmallDevice
                  ? null
                  : <div className='block basis-5/12 px-4'>
                      <ReservationBox
                        reserveAction={() => handleReservation()}
                        reviewsCount={place.reviews ? place.reviews.length : '0' + ' reviews'}
                        rates={place.reviews}
                        checkinDate={checkinDate}
                        checkoutDate={checkoutDate}
                        pricePerNight={place.pricePerNight} 
                        numberOfNights={numberOfNights} 
                        totalPrice={place.pricePerNight * numberOfNights} />
                    </div>
                }
              </div>
              <Separator />
              {
                place.geolocation.lat && place.geolocation.lng &&
                <div className='my-8'>
                  <h2 className='text-xl font-bold mb-4'>Where you’ll be</h2>
                  <p className='mb-4'>{place.city}, {place.state}, {place.country}</p>
                  <LocationMap longitude={place.geolocation.lng} latitude={place.geolocation.lat} />
                </div>
              }
              <Separator />
              <Reviews place={place} />
          </div>
          {
            isSmallDevice
            ? <ReservationBoxSmall
                reserveAction={() => handleReservation()}
                numberOfNights={numberOfNights} 
                totalPrice={place.pricePerNight * numberOfNights}
                checkinDate={checkinDate}
                checkoutDate={checkoutDate}
                pricePerNight={place.pricePerNight}  />
            : null
          }
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

export default Place