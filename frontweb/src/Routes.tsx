import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Services from "pages/Servicis";

import Home from "pages/Home";
import Speciality from "pages/Speciality";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/servicos" exact>
        <Speciality />
      </Route>
      <Route path="/detalhes">
        <Services />
      </Route>
    </Switch>
    <Footer />
  </BrowserRouter >
);

export default Routes;