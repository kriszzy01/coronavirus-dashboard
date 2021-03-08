import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Searchbar } from "../components/Searchbar";
import { Sidebar } from "../components/Sidebar";

export const Header: React.FC = () => {
  const [openSearchbar, setOpenSearchbar] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header>
      <div data-searchcountry={openSearchbar}>
        <button
          type="button"
          aria-labelledby="menu-label"
          aria-expanded={openMenu}
          aria-controls="sidebar"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span className="vh" id="menu-label">
            {openMenu ? "close menu" : "open menu"}
          </span>
        </button>

        <h1>COVID-19 Dashboard</h1>

        <button
          type="button"
          aria-label="open searchbar"
          onClick={() => setOpenSearchbar(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
        </button>

        <Searchbar
          setOpenSearchbar={setOpenSearchbar}
          openSearchbar={openSearchbar}
        />

        <nav className="desktop">
          <NavLink to="/coronavirus-dashboard">Overview</NavLink>
          <NavLink to="/data-table">Data Table</NavLink>
        </nav>
      </div>

      <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </header>
  );
};
