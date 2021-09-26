import Index from './pages';
import RhodesianInfoPage from './pages/rhodesian';
import{ BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import './styles/styles.css';


function App() {
  return (
    <div className='App'>
      <Router>
          <Switch>
            <Route path='/rhodesian'>
              <RhodesianInfoPage />
            </Route>
            <Route path='/'>
              <Index />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

//https://github.com/Mision-TIC-Ciclo-3/ExplicacionReact
export default App;
