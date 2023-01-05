import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./Pages/NotFound";
import { ROUTES } from "./routes";
import RequiredAuth from "./components/RequiredAuth";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        {/*public routes */}
        <Route path="/login" element={<Login />} />
        {/*protected routes */}
        <Route element={<RequiredAuth />}>
          <Route path="/" element={<Layout />}>
            <Route path={ROUTES.HOME} element={<Home />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
