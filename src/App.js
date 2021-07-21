import logo from './utils/images/logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import Recoleccion from "./Components/Recoleccion.jsx"
import Inicio from "./Components/Inicio.jsx"
import Registragranja from "./Components/Registragranja.jsx"
import Controlrecoleccion from "./Components/Controlrecoleccion.jsx"
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route path="/" exact component={Inicio} />
      <Route path="/Recoleccion" exact component={Recoleccion} />
      <Route path="/Registragranja" exact component={Registragranja} />
      <Route path="/Controlrecoleccion" exact component={Controlrecoleccion} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
