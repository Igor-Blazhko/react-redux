
import { Route, Routes } from "react-router-dom";
import Main from "../pages/main";
import Placehold from "../templates/placehold";
import Saga from "../pages/sagas";

const Router = () => {

    return (
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="Placeholder" element={<Placehold />} />
        <Route path="Saga" element={<Saga />} />
      </Routes>
    );
};

export default Router;