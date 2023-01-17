import SearchResults from '../components/SearchResults/SearchResults'
import groq from 'groq'
import { sanityClient } from '../sanity'

const searchResults = ({ places }) => {
    return (
        <div className='flex flex-col min-h-screen w-full'>
            <SearchResults places={places} />
        </div>
    )
}

export async function getStaticProps() {
    const places = await sanityClient.fetch(groq`
      *[_type == 'place'] {
        _id,
        title,
        slug,
        city, 
        state,
        country,
        mainImage,
        pricePerNight,
        guestNumber,
        reviews[]
      }
    `)

    return {
        props: {
            places,
        },
    }
}

export default searchResults
