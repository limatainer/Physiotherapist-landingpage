import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Detalhes from "pages/Detalhes";

import Home from "pages/Home";
import Servicos from "pages/Servicos";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/servicos" exact>
        <Servicos />
      </Route>
      <Route path="/detalhes">
        <Detalhes />
      </Route>
    </Switch>
    <Footer />
  </BrowserRouter >
);

export default Routes;