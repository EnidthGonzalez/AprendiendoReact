import Index from './pages';
import Layout from './layouts/Layout';
import BorderCollie from './pages/borderCollie';
import RhodesianInfoPage from './pages/rhodesian';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import './styles/styles.css';



function App() {
  return (
    <div className='App'>
      <Router>
        <Layout >
            <Switch>
               <Route path='/rhodesian' >
                    <RhodesianInfoPage />
                </Route>
                <Route path='/borderCollie'>
                    <BorderCollie />
                </Route>
                <Route path='/'>
                    <Index  />
                </Route>
            </Switch>
        </Layout >        
      </Router>
    </div>
  );
}

//https://github.com/Mision-TIC-Ciclo-3/ExplicacionReact
export default App;
