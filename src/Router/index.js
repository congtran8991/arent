import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { routes } from "./routes";

function AppRouter() {
  const showContentMenus = () => {
    const result = routes?.map((route, index) => {
      return (
        <Route
          key={index}
          path={route?.path}
          element={route.element}
        />
      );
    });
    return <>{result}</>;
  };
  return (
    <>
      <Routes>
      
        {showContentMenus()}
        </Routes>
    </>
  );
}

export default AppRouter;
