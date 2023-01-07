import { Route, Routes } from "react-router-dom";
import Column from "./Pages/Column/Column";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login";
import MyRecord from "./Pages/MyRecord/MyRecord";
import NotFound from "./Pages/NotFound";
import Layout from "./components/Layout";
import RequiredAuth from "./components/RequiredAuth";
import { ROUTES } from "./routes";

function App() {
  return (
    <div className="App">
      <Routes>
        {/*public routes */}
        <Route path="/login" element={<Login />} />
        {/*layout routes */}
        <Route path="/" element={<Layout />}>
          <Route path={ROUTES.COLUMN} element={<Column />} />
          {/*protected routes */}
          <Route element={<RequiredAuth />}>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.MYRECORD} element={<MyRecord />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
