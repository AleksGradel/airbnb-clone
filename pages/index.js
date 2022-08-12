import groq from 'groq'
import Link from 'next/link';
import Tile from '../components/Tile/Tile'
import { sanityClient, urlFor } from '../sanity';

export default function Home({ places }) {
  return (
    <div className='flex flex-col h-screen w-full'>
      <div className='p-12 xl:p-24 grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'>
        {places.map((place) => place.slug && (
          <Link href={`place/${place.slug.current}`} key={place?._id}>
            <a>
              <Tile
                img={place.mainImage ? urlFor(place.mainImage).url() : ''}
                price={place?.pricePerNight}
                title={place?.title}/>
            </a>
          </Link>
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
      slug,
      mainImage,
      pricePerNight
    }
  `);

  return {
    props: {
      places
    },
  };
}