import groq from 'groq'
import Link from 'next/link'
import Tile from '../components/Tile/Tile'
import { sanityClient, urlFor } from '../sanity'
import { FaMap } from 'react-icons/fa'
import { useEffect } from 'react'
import { reset } from '../slices/guestsSlice'
import { useDispatch } from 'react-redux'

export default function Home({ places }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(reset())
  }, [])

  return (
    <div className='flex flex-col w-full min-h-screen'>
      <div className='absolute bottom-36 w-full flex justify-center'>
          <Link href='/mapView'>
            <div className='fixed z-50 cursor-pointer bg-grey-dark text-white font-bold py-4 px-6 rounded-full shadow hover:scale-105 flex flex-row items-center gap-2 text-sm'>
                <span>Show map</span>
                <FaMap />
            </div>
          </Link>
      </div>
      <div className='mb-10 md:mb-0 p-4 md:p-12 xl:p-24 grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'>
        {places.map((place) => place.slug && (
          <Link href={`place/${place.slug.current}`} key={place?._id}>
            <a>
              <Tile
                img={place.mainImage ? urlFor(place.mainImage).url() : ''}
                price={place?.pricePerNight}
                rates={place.reviews}
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
      pricePerNight,
      reviews[]
    }
  `);

  return {
    props: {
      places
    },
  };
}