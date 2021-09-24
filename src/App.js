import logo from './media/logo.png';
import './styles/App.css';
import borderCollie from './media/borderCollie.jpg';
import rhodesian from './media/rhodesian.jpg';
function App() {
  return (
    <div className="App">
    <header>
        <ul className="navbar">
          <li>
            <img src= {logo} alt="imagen" className="logo"/>
          </li>
          <li>
                <button className="button mainButton">Nuevo Post </button>
            </li>            
            <li>
                <div className="buscar">
                    <input placeholder = "buscar una raza" />
                    <i className="fas fa-search button iconoBusqueda"></i>
                </div>                
            </li>
            <li>
                <button className="button secondaryButton">Login</button>
            </li>            
            <li>
                <button className="button mainButton">Registro</button>
            </li>
        </ul>
    </header>
    <main>
        <section>
            <h1>Razas de Perros</h1>
            <ul className="breedCardContainer">
                <li className="breedCard">
                    <div className= "contenedorImagen">
                        <img src={borderCollie} alt="border-collie"/>
                    </div>
                    <samp className="breedTitle">Border Collie</samp>
                  
                </li>
                <li className="breedCard">
                    <div className= "contenedorImagen">
                        <img src= {rhodesian} alt="Rhodesian"/>
                    </div>
                    <samp className="breedTitle">Rhodasian</samp>
                </li>
            </ul>
        </section>
    </main>
    <footer></footer>
    </div>
  );
}

export default App;
