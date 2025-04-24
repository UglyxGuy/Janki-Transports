import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface MapProps {
  location: {
    lat: number;
    lng: number;
  };
}

export const Map = ({ location }: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY,
      version: 'weekly',
    });

    loader.load().then(() => {
      if (mapRef.current) {
        const map = new google.maps.Map(mapRef.current, {
          center: location,
          zoom: 12,
        });

        new google.maps.Marker({
          position: location,
          map,
          title: 'Shipment Location',
        });
      }
    });
  }, [location]);

  return <div ref={mapRef} className="w-full h-full rounded-lg" />;
}; 