import React from "react";
import { TileLayer, ZoomControl } from "react-leaflet";
import { useSelector } from "react-redux";
import { getWorldwide } from "../selectors";
import { Card } from "../components/Card";
import { MapControls } from "../components/MapControls";
import { Map } from "../blocks/Map";
import { attribution, commify, tileLayer } from "../utils";

export const DataSummary: React.FC = () => {
  const {
    active,
    cases,
    deaths,
    recovered,
    todayCases,
    todayDeaths,
    todayRecovered,
    updated,
    affectedCountries,
  } = useSelector(getWorldwide);

  return (
    <div className="summary">
      <div className="summary__data">
        <div>
          <Card title="Active" today={todayCases} total={active} />
          <Card title="Recovered" today={todayRecovered} total={recovered} />
          <Card title="Deaths" today={todayDeaths} total={deaths} />

          <div className="card">
            <p>Last Updated: {new Date(updated).toLocaleString()}</p>
            <p>Affected Countries: {affectedCountries}</p>
          </div>
        </div>

        <Map>
          <TileLayer attribution={attribution} url={tileLayer} />
          <ZoomControl position="bottomright" />
          <MapControls />
        </Map>
      </div>
      
      <div className="summary__text">
        <h3>
          <span>Globally</span>, as of{" "}
          <span>{new Date(updated).toString()}</span>, there has been{" "}
          <span className="color-active">{commify(cases)} confirmed cases</span>{" "}
          of COVID-19, including{" "}
          <span className="color-deaths">{commify(deaths)} deaths</span>{" "}
          reported by Johns Hopkins University.
        </h3>
      </div>
    </div>
  );
};
