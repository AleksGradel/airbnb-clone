import { sanityClient } from '../../sanity'
import groq from 'groq'
import ImageGallery from '../../components/Place/ImageGallery'

const Place = ({ place }) => {
    console.log(place)
    return (
        <div className='px-12 xl:px-24 pt-4'>
            <p className='text-2xl font-bold'>{place.title}</p>
            <div>
              <ImageGallery mainImage={place.mainImage} images={place.images} />
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
    slug,
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