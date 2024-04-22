import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/lib/classNames/config/routeConfig/routeConfig";

export default function AppRouter() {
  return (
    <div>
      {" "}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
         {Object.values(routeConfig).map(({element, path}) => (
           <Route
             key={path}
             path={path}
             element={(element)} 
             />
         ))}
        </Routes>
      </Suspense>
    </div>
  );
}
