import { sanityClient, urlFor } from '../../sanity'
import groq from 'groq'
import ImageGallery from '../../components/Place/ImageGallery'
import Separator from '../../components/fragments/Separator'

const Place = ({ place }) => {
    console.log(place)
    return (
        <div className='px-12 xl:px-24 pt-4'>
            <p className='text-2xl font-bold'>{place.title}</p>
            <div>
              <ImageGallery mainImage={place.mainImage} images={place.images} />
            </div>
            <div className='flex'>
              <div className='basis-7/12'>
                <div className='flex justify-between my-4'>
                  <p className='text-xl font-bold'>{place.type} hosted by {place.hostName}</p>
                  <div className=''>
                    <img 
                      className='w-14 h-14 rounded-full object-cover'
                      src={urlFor(place.hostAvatar).url()} 
                      alt={place.hostName}/>
                  </div>
                </div>
                <Separator />
              </div>
              <div className='basis-5/12 px-4'>
                reservation
              </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export const placeQuery = groq`
  *[_type == "place" && slug.current == $pageSlug][0] {
    _id,
    title,
    mainImage,
    images,
    type,
    slug,
    host,
    "hostName": host.host->name,
    "hostAvatar": host.host->avatar,
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