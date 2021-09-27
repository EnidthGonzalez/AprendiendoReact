import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';

    
//en react todos los componentes tienn q tener un solo parent. entonces yo en react no puedo hace un return de varios elementos diferentes
 //En esta variable children entra todos los componentes q yo ponga dentro

const Layout = ({children}) => {
    //todos los elementos que se pongan en un return siempre tienen q estar por debajo de un solo elemento padre.
    return (
        /*  // elemento o contenedor padre <div> o un componente vacio <>
            <>  
            <Header/>
                <div>Contenido </div>
            <Footer />
            </> */
        <div className='mainContainer'>
            <Header />
                <main>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout

