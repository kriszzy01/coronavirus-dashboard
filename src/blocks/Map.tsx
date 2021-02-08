import React from "react";
import L from "leaflet";
import { MapContainer } from "react-leaflet";
import { useSelector } from "react-redux";
import { Tabs } from "../components/Tabs";
import { getMapData } from "../selectors";

const tabItems = [
  "Cummulative Cases",
  "Active Cases",
  "Tests",
  "Case-Fatality Ratio",
];

export const Map: React.FC = ({ children }) => {
  const activeData = useSelector(getMapData);

  /*The farthest East longitude of a map is 180, West is -180.
  The farthest North Latitude of a map is 90, South is -90. 
  We use the farthest longitudes and latitudes to bound the map. This ensures we can't view anything outside these bounds.
  Since the map is bound to the farthest latitudes and longtitudes, the map view is restricted to the whole world.
  */
  const southWest = new L.LatLng(-90, -180); //South-west point for the bound
  const northEast = new L.LatLng(90, 180); //North-east point for the bound
  const bounds = L.latLngBounds(southWest, northEast); //Sets and restricts the map view to a geopgraphical region, in this case the world

  return (
    <div>
      <div id={activeData} role="tabpanel">
        <MapContainer
          center={bounds.getCenter()}
          zoom={1}
          minZoom={1}
          zoomControl={false}
          maxBounds={bounds}
          maxBoundsViscosity={0.75}
        >
          {children}
        </MapContainer>
      </div>
      <Tabs tabItems={tabItems} activeData={activeData} tabLabel="Map Data" />
    </div>
  );
};
