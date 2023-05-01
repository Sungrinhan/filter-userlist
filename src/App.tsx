import "./App.css";

import ControlsContainer from "./components/SearchBox";
import UserTable from "./components/UserTable";

export const App = () => {
  return (
    <div className="app">
      <ControlsContainer />
      <UserTable />
    </div>
  );
};
