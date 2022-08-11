import groq from 'groq';
import Tile from '../components/Tile/Tile'
import { sanityClient, urlFor } from '../sanity';

export default function Home({ places }) {
  console.log(places)
  // console.log(urlFor(places[0].mainImage))

  return (
    <div className='flex flex-col h-screen w-full'>
      <div className='p-12 xl:p-24 grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'>
        {places.map((place) => (
          <Tile 
            key={place?._id}
            img={place.mainImage ? urlFor(place.mainImage).url() : ''}
            price={place?.pricePerNight}
            title={place?.title}/>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const places = await sanityClient.fetch(groq`
    *[_type == "place"] {
      _id,
      title,
      mainImage,
      pricePerNight
    }
  `);

  return {
    props: {
      places
    }
  };
}