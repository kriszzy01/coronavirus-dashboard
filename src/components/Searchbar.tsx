import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { getCountry } from "../selectors";
import { Dropdown } from "./Dropdown";
import { useSearchbar } from "../hooks";

interface SearchbarProps {
  setOpenSearchbar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Searchbar: React.FC<SearchbarProps> = ({ setOpenSearchbar }) => {
  const searchbarRef = useRef<HTMLDivElement>(null);
  const [searchInput, setSearchInput] = useSearchbar("", searchbarRef);

  const countries = useSelector(getCountry);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchInput(event.target.value);

  const handleCloseSearchBar = () => {
    setSearchInput("");
    setOpenSearchbar(false);
  };

  const searchResult = Object.values(countries).filter(({ country }) =>
    searchInput === ""
      ? null
      : country.toLowerCase().startsWith(searchInput.toLowerCase())
  );

  return (
    <div className="searchbar-container" ref={searchbarRef}>
      <div className="searchbar">
        <div>
          <span aria-hidden="true" style={{ height: "24px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </span>

          <input
            type="text"
            value={searchInput}
            placeholder="Search by Country"
            onChange={handleChange}
          />
        </div>

        <Dropdown
          searchResult={searchResult}
          searchTerm={searchInput}
          setSearchTerm={setSearchInput}
        />
      </div>

      <button
        type="button"
        aria-label="close searchbar"
        style={{ height: "24px" }}
        onClick={handleCloseSearchBar}
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
        </svg>
      </button>
    </div>
  );
};
