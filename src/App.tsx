import { useEffect } from "react";
import "./App.css";

import ControlsContainer from "./components/SearchBox";
import UserTable from "./components/UserTable";

import { useGetIdNameQuery, useGetLetterQuery } from "./store/services/user";

export const App = () => {
  return (
    <div className="app">
      <ControlsContainer />
      <UserTable />
    </div>
  );
};
