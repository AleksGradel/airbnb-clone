import Map, {Marker, Popup} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '../../sanity'

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

function MapView({ places }) {
    const [popupInfo, setPopupInfo] = useState(null)

    const markers = useMemo(() => places?.map((place, index) => (
        <Marker 
            key={`marker-${index}`}
            latitude={place.geolocation.lat} 
            longitude={place.geolocation.lng}
            onClick={e => {
                e.originalEvent.stopPropagation();
                setPopupInfo(place);
              }}>
            <span className='bg-white text-grey-dark font-bold shadow-md p-2 rounded-full text-md'>
                ${place.pricePerNight}
            </span>
        </Marker>
    )), [])
    
    return (
        <div>
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
                {markers}

                {popupInfo && (
                    <Popup
                        longitude={popupInfo.geolocation.lng} 
                        latitude={popupInfo.geolocation.lat}
                        closeButton='false'
                        onClose={() => setPopupInfo(null)}
                        className='w-80'>
                        <Link href={`place/${popupInfo.slug.current}`} key={popupInfo?._id}>
                            <a className='outline-none'>
                            <Image 
                                alt='Your next dream destination'
                                src={urlFor(popupInfo?.mainImage).url()} 
                                layout='responsive'
                                objectFit='cover'
                                width={100} 
                                height={100} />
                            <div className='flex flex-col mt-2'>
                                <span className='font-bold text-md'>{popupInfo?.title}</span>
                                <div>
                                    <span className='font-bold'>${popupInfo?.pricePerNight}</span>
                                    <span className='ml-1'>night</span>
                                </div>
                            </div>
                            </a>
                        </Link>
                    </Popup>
                )}
            </Map>
        </div>
    )
}

export default MapView
