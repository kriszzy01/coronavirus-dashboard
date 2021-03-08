import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMap } from "react-leaflet";
import { setMapData } from "../slices/map";
import { setTargetData } from "../slices/map";

import {
  getMapData,
  getCountry,
  getTargetData,
  getCountryHistory,
} from "../selectors";

import { geoJsonToMarkers, featuresToGeoJSON, dynamicFlyTo } from "../utils";
import { fetchCountryHistory } from "../slices/country";

const tabItems = ["Cummulative", "Active", "Tests", "Case-Fatality Ratio"];

export const MapControls: React.FC = () => {
  const mapInstance = useMap(); //Instance of the map object
  const dispatch = useDispatch();

  const countries = useSelector(getCountry);
  const countryHistory = useSelector(getCountryHistory);
  const activeData = useSelector(getMapData);
  const targetData = useSelector(getTargetData);

  dynamicFlyTo(targetData, countries, mapInstance); //Map flies to the cordinates of a location, which is determined by the selected country

  const handleMarkerClick = (data: string) => dispatch(setTargetData(data));

  const locationsGeoJsonLayers = geoJsonToMarkers(
    featuresToGeoJSON(countries),
    activeData,
    handleMarkerClick
  );

  const handleGlobeButton = () => {
    const zoom = window.innerWidth > 700 ? 2 : 1;

    mapInstance.setView([20, 0], zoom);
    dispatch(setTargetData("Global"));
  };

  //App re-renders only when activeData changes, hence no need for dependency array
  //since this is the intended behaviour
  useEffect(() => {
    locationsGeoJsonLayers.addTo(mapInstance);

    return () => {
      locationsGeoJsonLayers.removeFrom(mapInstance); //Clear all markers from map
    };
  });

  //Fetch Historical Data for selected country
  useEffect(() => {
    if (targetData !== "Global" && !countryHistory[targetData]) {
      //Conditions neccessary to prevent calling fetch when country history already exists
      dispatch(fetchCountryHistory(targetData)); 
    }
  });

  return (
    <div className="mapcontrols">
      <div className="mapcontrols__buttons">
        {tabItems.map((item) => (
          <button
            type="button"
            onClick={() => dispatch(setMapData(item))}
            data-selected={activeData === item}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>

      <button type="button" aria-label="view globe" onClick={handleGlobeButton}>
        <svg width="20" height="20">
          <path
            fill="white"
            d="M6.64 3.928C7.5 1.478 8.785 0 10 0c1.216 0 2.5 1.478 3.36 3.928H6.64zM6.75.544a10.022 10.022 0 00-4.688 3.384h3.072C5.484 2.72 6.03 1.576 6.75.544zM4.284 10c-.005-1.56.155-3.117.478-4.644H1.147a9.975 9.975 0 000 9.288h3.615A22.031 22.031 0 014.284 10zm1.432 0c-.01 1.563.163 3.121.515 4.644h7.538c.352-1.523.525-3.081.515-4.644a20.078 20.078 0 00-.515-4.644H6.23A20.078 20.078 0 005.716 10zm12.222-6.072A10.022 10.022 0 0013.25.544a11.522 11.522 0 011.616 3.384h3.072zM13.25 19.456a10.022 10.022 0 004.688-3.384h-3.072a11.522 11.522 0 01-1.616 3.384zM2.062 16.072a10.022 10.022 0 004.688 3.384 11.522 11.522 0 01-1.616-3.384H2.062zM15.238 5.356c.323 1.527.483 3.084.478 4.644a22.031 22.031 0 01-.478 4.644h3.615a9.975 9.975 0 000-9.288h-3.615zM6.64 16.072C7.5 18.522 8.784 20 10 20c1.216 0 2.5-1.478 3.36-3.928H6.64z"
            fillRule="nonzero"
          ></path>
        </svg>
      </button>
    </div>
  );
};
