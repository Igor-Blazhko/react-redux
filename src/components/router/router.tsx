
import { Route, Routes } from "react-router-dom";
import Main from "../pages/main";
import Main1 from "../pages/mainMobX";
import Placehold from "../templates/placehold";
import Saga from "../pages/sagas";
import { FC } from "react";
import Zus from "../pages/zus";
import Effect from "../pages/Effect";
import { createTheme, ThemeProvider } from "@mui/material";
import MuiPage from "../pages/MuiPage";


const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

const Router: FC<{isMobx?: boolean}> = ({ isMobx }) => {
  if (isMobx) return (
    <Routes>
      <Route path="*" element={<Main1 />} />
      <Route path="Placeholder" element={<Main1 />} />
      <Route path="Saga" element={<Main1 />} />
    </Routes>
  );
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="Placeholder" element={<Placehold />} />
        <Route path="Saga" element={<Saga />} />
        <Route path="Zus" element={<Zus />} />
        <Route path="Effect" element={<Effect />} />
        <Route path="Mui" element={<MuiPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default Router;