import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {routes} from "api/constants/routes.constats";
import {HomePage} from "design/pages";
import {Layout} from "design/templates";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.root} element={<Layout />}>
                    <Route index element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
