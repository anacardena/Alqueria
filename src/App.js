import logo from './utils/images/logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import Recoleccion from "./Components/Recoleccion/Recoleccion.jsx"
import Inicio from "./Components/Inicio/Inicio.jsx"
import Registragranja from "./Components/Registragranja/Registragranja.jsx"
import Controlrecoleccion from "./Components/Controlrecoleccion/Controlrecoleccion.jsx"
import Auth from "./Components/Auth/Auth.jsx"
import Header from "./Components/Header.jsx"
import Modalregistro from "./Components/Modalregistro/Modalregistro.jsx"
import Modaleditar from "./Components/Modaleditar/Modaleditar.jsx"


import {useFirebaseApp} from 'reactfire'

function App() {
  const firebase = useFirebaseApp();
  console.log(firebase);
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
      <Route path="/" exact component={Auth} />
      <Route path="/Inicio" exact component={Inicio} />
      <Route path="/Recoleccion" exact component={Recoleccion} />
     /*--{<Route path="/Auth" exact component={Auth} />} */
      <Route path="/Registragranja" exact component={Registragranja} />
      <Route path="/Modalregistro" exact component={Modalregistro} />
      <Route path="/Modaleditar" exact component={Modaleditar} />


      <Route path="/Controlrecoleccion" exact component={Controlrecoleccion} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
