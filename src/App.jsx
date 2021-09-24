import logo from './media/logo.png';
import './styles/App.css';
import borderCollie from './media/borderCollie.jpg';
import rhodesian from './media/rhodesian.jpg';
function App() {
  return (
    <div className="App">
    <header>
        {/* <div> hola mundo esto es un div </div> */}
        <div></div>
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
               < CardRazasPerros nombreRaza = "Border Collie" imagen = {borderCollie}/>
               < CardRazasPerros nombreRaza = "Rhodesian" imagen= {rhodesian}/>
            </ul>
        </section>
    </main>
    <footer></footer>
    </div>
  );
}
//-----------Creacion de componentes----------//
// function CardRazasPerros(props) {
//funcion (imput=> es un objeto y ese objeto tiene {2 propiedades} se vuelven variables y objetos al llamarlo)  
function CardRazasPerros({nombreRaza, imagen}) {
    return(
        <li className="breedCard">
            <div className= "contenedorImagen">
                <img src= {imagen} alt={nombreRaza}/>
            </div>
            <samp className="breedTitle">{nombreRaza}</samp>
        </li>
    )
}
export default App;
