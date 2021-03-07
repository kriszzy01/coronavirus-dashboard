import React from "react";
import { useSelector } from "react-redux";
import { getCountry } from "../selectors";
import { commify } from "../utils";

export const DataTable: React.FC = () => {
  const countries = useSelector(getCountry);

  return (
    <div className="datatable" aria-label="Situation by Country">
      <div className="datatable__heading">
        <p>Country</p>
        <p>Cummulative Cases</p>
        <p>Active</p>
        <p>Deaths</p>
        <p>Recovered</p>
        <p>Tests</p>
      </div>
      <div className="datatable__stats">
        <div>
          {Object.values(countries).map(
            ({ country, stats, flag, active, tests }) => {
              return (
                <div className="row" key={country}>
                  <p>
                    <span>
                      <img src={flag} alt={`National flag of ${country}`} />
                    </span>
                    <span>{country}</span>
                  </p>

                  <p>{commify(stats.confirmed)}</p>
                  <p>{commify(active)}</p>
                  <p>{commify(stats.deaths)}</p>
                  <p>{commify(stats.recovered)}</p>
                  <p>{commify(tests)}</p>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};
