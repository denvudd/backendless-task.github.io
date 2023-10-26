import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import TabsPage from "./pages/Tabs";
import MainLayout from "./layouts/MainLayout";

function App() {
  const NotFoundPage = React.lazy(
    () => import(/* webpackChunkName: "NotFoundPage" */ "./pages/NotFound")
  );

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="" element={<HomePage />} />
          <Route path="/tabs" element={<TabsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
