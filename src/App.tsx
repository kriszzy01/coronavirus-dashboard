import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./styles/style.scss";

import { fetchWorldWide } from "./slices/worldwide";

import { fetchCountry } from "./slices/country";
import { fetchProvince } from "./slices/province";

import { Header } from "./blocks/Header";
import { DataSummary } from "./blocks/DataSummary";
import { DataChart } from "./blocks/DataChart";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProvince());
    dispatch(fetchWorldWide());
    dispatch(fetchCountry());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <DataSummary />
      </main>
      <footer></footer>
    </>
  );
};

export default App;
