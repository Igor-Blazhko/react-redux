import { Provider } from "react-redux";
import store from "./redux-toolkit/store/store";
import Router from "./components/router/router";
import Head from "./components/templates/head";
import { BrowserRouter } from "react-router-dom";
import Foot from "./components/templates/foot";


const App = () => {
  return (
    <Provider store={store}>
      {" "}
      <BrowserRouter>
        <Head/>
        <Router />
        <Foot/>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
