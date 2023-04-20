import classes from './GoogleLocation.module.scss';

import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react';

const LocationPin = ({ text }) => (
  <div className={classes.pin}>
    <Icon icon="topcoat:location" color="red" className={classes.pin_icon} />
    <p className={classes.pin_text}>{text}</p>
  </div>
);

export const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <div className={classes.google_map}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP }}
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
);
