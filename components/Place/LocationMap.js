import Map, {Marker} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

const LocationMap = ({ latitude, longitude }) => {
  return (
    <div>
      <Map
        initialViewState={{
          latitude: latitude,
          longitude: longitude,
          zoom: 11
        }}
        style={{width: 'auto', height: '50vw'}}
        mapStyle='mapbox://styles/mapbox/light-v10'
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker latitude={latitude} longitude={longitude} color='#ff385c' />
      </Map>
    </div>
  )
}

export default LocationMap
