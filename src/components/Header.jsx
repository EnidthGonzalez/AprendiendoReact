import logo from '../media/logo.png';

const Header = () => {
    //hacemos operaciones --aca hay un problema hoilsting: 
    return(
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
    );
}

export default Header;

