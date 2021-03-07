import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/style.scss";

import { fetchWorldWide, fetchHistoricalAll } from "./slices/worldwide";
import { fetchCountry } from "./slices/country";

import { Header } from "./blocks/Header";
import { Overview } from "./blocks/Overview";
import { DataTable } from "./components/DataTable";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWorldWide());
    dispatch(fetchCountry());
    dispatch(fetchHistoricalAll());
  }, [dispatch]);

  return (
    <Router>
      <Header />

      <main>
        <Switch>
          <Route path="/coronavirus-dashboard" component={Overview} />
          <Route path="/data-table" component={DataTable} />
        </Switch>
      </main>

      <footer>
        <p>
          Made by <span className="color-active">Chris Dhikhan</span>
        </p>
      </footer>
    </Router>
  );
};

export default App;
