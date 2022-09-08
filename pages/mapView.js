import Link from 'next/link'
import { FaListUl } from 'react-icons/fa'
import MapView from '../components/MapView/MapView'
import { sanityClient } from '../sanity'
import groq from 'groq'

function mapView({ places }) {
    return (
        <div>
            <div className='fixed bottom-24 w-full flex justify-center z-10'>
                <Link href='/'>
                    <div className='cursor-pointer bg-grey-dark text-white font-bold py-4 px-6 rounded-full shadow hover:scale-105 flex flex-row items-center gap-2 text-sm'>
                        <span>Show list</span>
                        <FaListUl />
                    </div>
                </Link>
            </div>
            <MapView places={places}/>
        </div>
    )
}

export async function getStaticProps() {
    const places = await sanityClient.fetch(groq`
      *[_type == "place"] {
        _id,
        title,
        slug,
        geolocation,
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

export default mapView
