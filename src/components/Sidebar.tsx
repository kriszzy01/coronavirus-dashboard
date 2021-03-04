import React from "react";
import { NavLink } from "react-router-dom";
import { useNoScroll } from "../hooks";

interface SidebarProps {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Sidebar: React.FC<SidebarProps> = ({ openMenu, setOpenMenu }) => {
  useNoScroll([openMenu]); //Stop scrolling on body depending on openMenu

  return (
    <nav
      id="sidebar"
      className="sidebar"
      aria-hidden={!openMenu}
      data-expanded={openMenu}
      onClick={() => setOpenMenu(false)}
    >
      <div>
        <NavLink to="/coronavirus-dashboard">Overview</NavLink>
        <NavLink to="/data-table">Data Table</NavLink>
      </div>

      <div className="external-links">
        <a
          href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
          target="_blank"
        >
          WHO (COVID-19) Homepage
        </a>

        <a href="https://coronavirus.jhu.edu/map.html" target="_blank">
          Johns Hopkins COVID-19 Map
        </a>
      </div>

      <div className="sidebar__donate">
        <p>WHO's Covid-19 Response Fund</p>
        <a
          href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate"
          target="_blank"
        >
          Donate
        </a>
      </div>
    </nav>
  );
};
