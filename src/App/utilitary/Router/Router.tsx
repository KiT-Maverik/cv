import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { route } from "constants/routes.contants";
import { HomePage } from "design/pages";
import { Layout } from "design/templates";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={route.home} element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
