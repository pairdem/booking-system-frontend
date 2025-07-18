import { useRef, useState } from "react";
import "maplibre-gl/dist/maplibre-gl.css";
import type {
  MapRef,
  ViewState,
  ViewStateChangeEvent,
} from "react-map-gl/maplibre";
import MapGLComponent, {
  Marker,
  NavigationControl,
} from "react-map-gl/maplibre";

interface MapSectionProps {
  location?: { lat: number; lng: number };
  address?: string;
  className?: string;
}

export const MapSection = ({
  location = { lat: 37.7749, lng: -122.4194 },
  address = "123 Business Street, San Francisco, CA",
  className = "",
}: MapSectionProps) => {
  const mapRef = useRef<MapRef>(null);
  const [viewState, setViewState] = useState<ViewState>({
    longitude: location.lng,
    latitude: location.lat,
    zoom: 14,
    bearing: 0, // Added default value
    pitch: 0, // Added default value
    padding: {
      // Added default value
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  });

  return (
    <div className={`w-full ${className}`}>
      <div className="mb-4">
        <h2 className="font-semibold text-gray-800 text-xl">Location</h2>
        {address && <p className="mt-1 text-gray-600">{address}</p>}
      </div>

      <div className="relative h-96 overflow-hidden rounded-xl border border-gray-200 shadow-lg">
        <MapGLComponent
          ref={mapRef}
          {...viewState}
          onMove={(evt: ViewStateChangeEvent) => setViewState(evt.viewState)}
          mapStyle="https://demotiles.maplibre.org/style.json"
          style={{ width: "100%", height: "100%" }}
        >
          <Marker longitude={location.lng} latitude={location.lat}>
            <div className="h-6 w-6 rounded-full border-2 border-white bg-primaryBlue shadow-xl" />
          </Marker>
          <NavigationControl position="top-right" />
        </MapGLComponent>
      </div>
    </div>
  );
};
