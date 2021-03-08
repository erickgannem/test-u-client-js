import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

import { View } from '../elements'

const containerStyle = {
  width: '100%',
  height: '100vh'
}

const center = {
  lat: -3.745,
  lng: -38.523
}

function Schools () {
  const [, setMap] = React.useState(null)

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  const onLoad = React.useCallback(function callback (map) {
    const bounds = new window.google.maps.LatLngBounds()
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback (map) {
    setMap(null)
  }, [])

  return (
    <View>
      {
        isLoaded
          ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={20}
                onLoad={onLoad}
                onUnmount={onUnmount}
              />
            )
          : (<></>)
      }
    </View>
  )
}

export default React.memo(Schools)
