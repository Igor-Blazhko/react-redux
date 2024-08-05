import Router from "./components/router/router";
import Head from "./components/templates/head";
import { BrowserRouter } from "react-router-dom";
import Foot from "./components/templates/foot";

const App = () => {
  return (
    <BrowserRouter>
      <Head isMobx={true} />
      <Router isMobx={true} />
      <Foot />
    </BrowserRouter>
  );
};

export default App;
