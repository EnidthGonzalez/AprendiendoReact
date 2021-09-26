import { Link } from 'react-router-dom'; 

//-----------Creacion de componentes----------//
// function CardRazasPerros(props) {
//funcion (imput=> es un objeto y ese objeto tiene {2 propiedades} se vuelven variables y objetos al llamarlo)  
function CardRazasPerros({nombreRaza, imagen}) {
  return(
      // <div>hola soy un componente</div>
      <li className="breedCard">
        <Link to= '/rhodesian'>
        <div className= "contenedorImagen">
          <img src= {imagen} alt={nombreRaza}/>
        </div>
        </Link>
        <samp className="breedTitle">{nombreRaza}</samp>
      </li>
  );
}
  
export default CardRazasPerros;