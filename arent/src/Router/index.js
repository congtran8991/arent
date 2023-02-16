import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routes";

function AppRouter() {
  const showContentMenus = () => {
    const result = routes?.map((route, index) => {
      return <Route key={index} path={route?.path} element={route.main} />;
    });
    return <>{result}</>;
  };
  return <><Routes>{showContentMenus()}</Routes></>;
}

export default AppRouter;
