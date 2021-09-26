import CardRazasPerros from '../components/cardRazasPerros';
import logo from '../media/logo.png';
import borderCollie from '../media/borderCollie.jpg';
import rhodesian from '../media/rhodesian.jpg';

//aca vamos hacer una página
function Index(){
    return (
     <div>
        <header>
            {/* <div> hola mundo esto es un div </div> */}
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
                   < CardRazasPerros nombreRaza = "Rhodesian" imagen= {rhodesian}/>                  
                </ul>
            </section>
        </main>
        <footer> </footer>
        </div>     
    ); 
}

export default Index;
