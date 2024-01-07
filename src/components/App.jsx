import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "../pages/Home";
import Search from "../pages/Search";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
