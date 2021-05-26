import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import "./map.css";

export default function MapContainer({ data }) {
console.log(data);
  const EntregasMap = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultCenter={{
          lat: Number(data.lat_origem),
          lng: Number(data.lng_origem),
        }}
        defaultZoom={10}
      >
        <Marker
            key={data.id}
            position={{ lat: Number(data.lat_origem), lng: Number(data.lng_origem) }}
        />
        <Marker
            position={{ lat: Number(data.lat_destino), lng: Number(data.lng_destino) }}
        />
        
      </GoogleMap>
    ))
  );

  return (
    <div className="container">
      <EntregasMap
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "500px" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}
