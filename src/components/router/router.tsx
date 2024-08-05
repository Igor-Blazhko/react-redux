
import { Route, Routes } from "react-router-dom";
import Main from "../pages/main";
import Main1 from "../pages/mainMobX";
import Placehold from "../templates/placehold";
import Saga from "../pages/sagas";
import { FC } from "react";

const Router: FC<{isMobx?: boolean}> = ({ isMobx }) => {
  if (isMobx) return (
    <Routes>
      <Route path="*" element={<Main1 />} />
      <Route path="Placeholder" element={<Main1 />} />
      <Route path="Saga" element={<Main1 />} />
    </Routes>
  );
    return (
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="Placeholder" element={<Placehold />} />
        <Route path="Saga" element={<Saga />} />
      </Routes>
    );
};

export default Router;