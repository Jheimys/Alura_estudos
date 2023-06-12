import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Customers from "./pages/Customers"
import TemplateDefault from "./templates/Default"
import TemplatePage from "./templates/Page"

function App() {
  return (
    <Router>
      <TemplateDefault>
        <Switch>

          {/* Rota de Customers */}
          <Route  path="/customers">
            <TemplatePage title="Client" Component={Customers} />
          </Route>

          {/* Rota da Home */}
          <Route  path="/">
          <TemplatePage title="Página inícial" Component={Home}/>
          </Route>

        </Switch>
      </TemplateDefault>
    </Router>
  );
}

export default App;
