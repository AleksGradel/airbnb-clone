import Map, {Marker, Popup} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useState } from 'react'

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

function MapView({ places }) {
    const [popupOpen, setPopupOpen] = useState(false)
    
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
                { places?.map((place, index) => place.slug && place.geolocation && (
                    <div key='place._id'>
                        <Marker 
                            key={index}
                            latitude={place.geolocation.lat} 
                            longitude={place.geolocation.lng}
                            onClick={() => setPopupOpen(true)}>
                            <span className='bg-white text-grey-dark font-bold shadow-md p-2 rounded-full text-md'>
                                ${place.pricePerNight}
                            </span>
                        </Marker>
                        { popupOpen && (
                            <Popup
                                key={index}
                                longitude={place.geolocation.lng} 
                                latitude={place.geolocation.lat}
                                onClose={() => setPopupOpen(false)}>
                                You are here
                            </Popup>
                        )}
                    </div>
                ))}
            </Map>
        </div>
    )
}

export default MapView
