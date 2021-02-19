import React from "react";
import { Province } from "../types";

interface Dropdown {
  searchResult: Province[];
}

export const Dropdown: React.FC<Dropdown> = ({ searchResult }) => {
  const handleClick = (country: Province) => {
    console.log(country);
  };

  return (
    <div
      className="dropdown"
      id="dropdown"
      data-expanded={searchResult.length > 0 ? "true" : "false"}
    >
      <ul>
        {searchResult.map((country) => {
          const { flag, country: name } = country;

          return (
            <li key={name} onClick={() => handleClick(country)}>
              <span>
                <img src={flag} alt={`flag of ${name}`} />
              </span>
              <span>{name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
