import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "routes.js";

const App = () => {
  const routing = useRoutes(routes);
  console.log(routing);
  return <React.Fragment>{routing}</React.Fragment>;
};

export default App;
