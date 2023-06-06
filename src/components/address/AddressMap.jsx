import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -23.5505,
  lng: -46.6333
};

function Map({ lat, lng }) {
  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map)
  }, [])

  useEffect(() => {
    if (map) {
      map.panTo({ lat, lng });
      map.setZoom(16);
    }
  }, [map, lat, lng])

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyD54brnpFGzIV8t9ZmlvFq7AQJbNV9oVUI"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        onLoad={onLoad}
      >
        <Marker position={{ lat, lng }} />
      </GoogleMap>
    </LoadScript>
  )
}

function AddressMap({cep}) {
  const [address, setAddress] = useState(null);
   

  useEffect(() => {
    if (cep) {
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${66633570}&key=AIzaSyD54brnpFGzIV8t9ZmlvFq7AQJbNV9oVUI`)
        .then(response => response.json())
        .then(data => {
          if (data.results[0]) {
            const { lat, lng } = data.results[0].geometry.location;
            setAddress({ lat, lng });
            console.log(data.results[0])
          } else {
            setAddress(null);
          }
        })
        .catch(error => console.log(error));
    }
  }, [cep])

  return (
    <div>
      {address ? (
        <Map lat={address.lat} lng={address.lng} />
      ) : (
        <p>Endereço não encontrado</p>
      )}
    </div>
  );
}


export default AddressMap;
