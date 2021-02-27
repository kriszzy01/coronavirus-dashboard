import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Province } from "../types";
import { setTargetData } from "../slices/map";

interface Dropdown {
  searchResult: Province[];
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export const Dropdown: React.FC<Dropdown> = ({
  searchResult,
  searchTerm,
  setSearchTerm,
}) => {
  const dispatch = useDispatch();
  const isSearchResults = searchResult.length > 0;
  const isSearchTerm = searchTerm !== "";

  const handleClick = (country: string) => {
    dispatch(setTargetData(country));
    setSearchTerm("");
  };

  useEffect(() => {
    //Stop scrolling on body if dropdown is open
    if (searchTerm) {
      document.querySelector("body")?.setAttribute("data-scroll", "");
    }

    return () => {
      document.querySelector("body")?.removeAttribute("data-scroll");
    };
  }, [searchTerm, isSearchTerm]);

  return (
    <div className="dropdown" id="dropdown" data-expanded={searchTerm !== ""}>
      {isSearchResults ? (
        <ul>
          {searchResult.map(({ flag, country: name }) => {
            return (
              <li key={name} onClick={() => handleClick(name)}>
                <span>
                  <img src={flag} alt={`flag of ${name}`} />
                </span>
                <span>{name}</span>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Country not found</p>
      )}
    </div>
  );
};
