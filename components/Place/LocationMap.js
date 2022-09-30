import Map, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { AiFillHome } from 'react-icons/ai'

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

const LocationMap = ({ latitude, longitude }) => {
    return (
        <div>
            <Map
                initialViewState={{
                    latitude: latitude,
                    longitude: longitude,
                    zoom: 14,
                }}
                style={{ width: 'auto', height: '50vw' }}
                mapStyle='mapbox://styles/mapbox/light-v10'
                mapboxAccessToken={MAPBOX_TOKEN}
            >
                <Marker latitude={latitude} longitude={longitude}>
                    <div className='text-white bg-pink rounded-full w-10 h-10 p-2 text-3xl flex justify-center items-center shadow-lg'>
                        <AiFillHome />
                    </div>
                </Marker>
            </Map>
        </div>
    )
}

export default LocationMap
