import CardRazasPerros from '../components/cardRazasPerros';
import borderCollie from '../media/borderCollie.jpg';
import rhodesian from '../media/rhodesian.jpg';

//aca vamos hacer una página
function Index(){
    return (    
        <section>
            <h1>Razas de Perros</h1>
                <ul className="breedCardContainer">
                   < CardRazasPerros nombreRaza = "Border Collie" imagen = {borderCollie}/>
                   < CardRazasPerros nombreRaza = "Rhodesian" imagen= {rhodesian}/>
                   < CardRazasPerros nombreRaza = "Rhodesian" imagen= {rhodesian}/>  
                   < CardRazasPerros nombreRaza = "Rhodesian" imagen= {rhodesian}/> 
                   < CardRazasPerros nombreRaza = "Rhodesian" imagen= {rhodesian}/>                 
                </ul>
        </section> 
    ); 
}

export default Index;
