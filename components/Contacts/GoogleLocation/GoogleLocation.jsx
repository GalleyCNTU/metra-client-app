import React from "react";
import GoogleMapReact from 'google-map-react';

import './GoogleLocation.scss';

import { Icon } from '@iconify/react';

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon="topcoat:location" color="red" className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP  }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
)

export default Map;