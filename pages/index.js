import React from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";

// const containerStyle = {
//   width: "100%",
//   height: "400px",
// };

const center = {
  lat: 40.7432815,
  lng: -73.9932197,
};

const options = {
  disableDefaultUI: true,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const markerIcon = {
    url: "/download.png",
    // scalesize: { width: "30px", height: 30 },
    scaledSize: new window.google.maps.Size(30, 30),
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ height: "100vh", width: "100%" }}
      center={center}
      zoom={17}
      options={options}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* marker 1 */}
      <Marker position={center} icon={markerIcon}>
        <InfoWindow
          options={{
            pixelOffset: new window.google.maps.Size(0, 12),
          }}
        >
          <div>$330</div>
        </InfoWindow>
      </Marker>

      {/* marker 2 */}
      <Marker
        position={{ lat: 40.7423888, lng: -73.9931178 }}
        icon={markerIcon}
      >
        <InfoWindow
          options={{
            pixelOffset: new window.google.maps.Size(0, 12),
          }}
        >
          <div>$300</div>
        </InfoWindow>
      </Marker>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default Map;
