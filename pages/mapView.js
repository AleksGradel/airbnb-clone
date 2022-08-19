import Map, {Marker} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import Link from 'next/link'
import { FaListUl } from 'react-icons/fa'

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

function mapView() {
  return (
    <div>
        <div className='fixed bottom-16 sm:bottom-24 w-full flex justify-center z-10'>
            <Link href='/'>
                <div className='cursor-pointer bg-grey-dark text-white font-bold py-4 px-6 rounded-full shadow hover:scale-105 flex flex-row items-center gap-2 text-sm'>
                    <span>Show list</span>
                    <FaListUl />
                </div>
            </Link>
        </div>
        <Map
            initialViewState={{
                latitude: 49.8,
                longitude: 26.13,
                zoom: 1
            }}
            style={{width: 'auto', height: '100vh'}}
            mapStyle="mapbox://styles/mapbox/light-v10"
            mapboxAccessToken={MAPBOX_TOKEN}
        >
            <Marker latitude='49.8' longitude='26.13' color="#ff385c" />
            <Marker latitude='50' longitude='30' color="#ff385c" />
        </Map>
    </div>
  )
}

export default mapView
