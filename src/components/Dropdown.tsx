import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Province } from "../types";
import { setTargetData } from "../slices/map";
import { useNoScroll } from "../hooks";

interface Dropdown {
  searchResult: Province[];
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  startDropdownFocus: boolean;
}

export const Dropdown: React.FC<Dropdown> = ({
  searchResult,
  searchTerm,
  setSearchTerm,
  startDropdownFocus,
}) => {
  const [activeCountryIndex, setActiveCountryIndex] = useState(0);
  const focusedCountryRef = useRef<HTMLLIElement>(null);

  const dispatch = useDispatch();
  const isSearchResults = searchResult.length > 0;
  const isSearchTerm = searchTerm !== "";

  useNoScroll([searchTerm, isSearchTerm]); //Stop scrolling on body depending on searchTerm and isSearchTerm

  const handleClick = useCallback(
    (country: string) => {
      dispatch(setTargetData(country));
      setSearchTerm("");
    },
    [dispatch, setSearchTerm]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      switch (event.key) {
        case "ArrowDown":
          return setActiveCountryIndex(
            (index) => (index + 1) % searchResult.length
          );

        case "ArrowUp":
          return setActiveCountryIndex((index) => {
            if (index === 0) {
              return searchResult.length - 1;
            }

            return (index - 1) % searchResult.length;
          });

        case "Escape":
          return setSearchTerm("");

        case "Tab":
          return setSearchTerm("");

        case "Enter":
          let country = document.querySelector("[data-focused=true]")
            ?.children[1].textContent as string;
          return handleClick(country);
      }
    },
    [searchResult.length, handleClick, setSearchTerm]
  );

  useEffect(() => {
    if (startDropdownFocus) {
      focusedCountryRef.current?.focus();
    }

    if (!searchTerm || !startDropdownFocus) {
      setActiveCountryIndex(0);
    }
  });

  return (
    <div
      className="dropdown"
      id="dropdown"
      data-expanded={searchTerm !== ""}
      aria-hidden={!isSearchTerm}
      onKeyDown={handleKeyDown}
    >
      {isSearchResults ? (
        <ul>
          {searchResult.map((country, index) => {
            const { flag, country: name } = country;
            let activeCountry = searchResult[activeCountryIndex]?.country;

            return (
              <li
                key={name}
                onClick={() => handleClick(name)}
                data-focused={activeCountry === name}
                ref={activeCountry === name ? focusedCountryRef : null}
                tabIndex={-1}
              >
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
