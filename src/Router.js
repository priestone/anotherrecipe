import { HashRouter, Route, Routes } from "react-router-dom";
import Start from "./pages/home/Start";
import Home from "./pages/home/Home";
import Guide from "./pages/guide/Guide";
import List from "./pages/list/List";
import Detail from "./pages/detail/Detail";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Start></Start>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/guide" element={<Guide></Guide>}></Route>
        <Route path="/list" element={<List></List>}></Route>
        <Route path="/detail" element={<Detail></Detail>}></Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
