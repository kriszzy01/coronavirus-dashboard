import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useMap } from "react-leaflet";
import { getProvince, getCountries, getMapData } from "../selectors";

import {
  geoJsonToMarkers,
  featuresToGeoJSON,
  featuresToGeoJsonArray,
} from "../utils";

export const CustomMarker: React.FC = () => {
  const mapInstance = useMap(); //Instance of the map object

  const provinces = useSelector(getProvince);
  const countries = useSelector(getCountries);
  const activeData = useSelector(getMapData);

  const provinceGeoJson = featuresToGeoJsonArray(provinces);
  const countriesGeoJson = featuresToGeoJsonArray(countries);

  const geoJsonArray = activeData.includes("Cummulative")
    ? provinceGeoJson
    : countriesGeoJson;

  const locationsGeoJsonLayers = geoJsonToMarkers(
    featuresToGeoJSON(geoJsonArray),
    activeData
  );

  //App re-renders only when activeData changes, hence no need for dependency array
  //since this is the intended behaviour
  useEffect(() => {
    locationsGeoJsonLayers.addTo(mapInstance);

    return () => {
      locationsGeoJsonLayers.removeFrom(mapInstance);
    };
  });

  //Markers are added via the map instance hence this component returns nothing
  //This is solely due to the map instance gotten via React Leaflet context.
  return null;
};
