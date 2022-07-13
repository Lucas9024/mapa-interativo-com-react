import React, {useState} from 'react';
import Map from 'react-map-gl';

const Maps = () => {

 

  return (
    <Map 
    initialViewState={{
      latitude: -25.665865,
      longitude: -49.3421069,
      zoom: 10 
    }}
    style={{width: 600, height: 400}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  )
}

export default Maps
