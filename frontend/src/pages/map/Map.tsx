import { useState } from 'react';
// import Map, { Marker } from 'react-map-gl';
import Lottie from 'react-lottie';
const MAPBOX_TOKEN: string =
  'pk.eyJ1Ijoid2F0Y2hhcmFjaGFpIiwiYSI6ImNsaHVkanhvbjNkangzZnBiN21ianBtZDIifQ.JJYQ0s9p0uMPMGmX3rGQtg';

function Map() {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100vh',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 12,
  });
  return (
    <div>
      {/* <Map
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={{
          longitude: 100.563082,
          latitude: 13.861081,
          zoom: 14,
        }}
        style={{ width: 1000, height: 1000 }}
        mapStyle='mapbox://styles/mapbox/streets-v9'
      >
        <Marker longitude={100.563082} latitude={13.861081} anchor='bottom'>
          <img
            style={{ width: 50, height: 50 }}
            src='../src/assets/img/pin.png'
            // src='../src/assets/gifs/car.gif'
            // alt="Car GIF"
          />
        </Marker>
      </Map> */}
    </div>
  );
}

export default Map;
