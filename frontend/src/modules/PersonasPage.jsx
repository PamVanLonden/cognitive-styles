import  personas  from './data/personasObject';
import { Link } from 'react-router-dom';
import { useSurveyForm } from './utils/useSurveyForm'; // Import the custom hook

const PersonasPage = () => {
    const { handleNextPage } = useSurveyForm();
    return (
        <>
            <h2>The Personas</h2>
        
            <p>The Abi, Pat, Dav, and Tim Personas are identical in several ways:  
                they all have the same job, live in the same place, and all are equally comfortable with mathematics 
                and with the technology they regularly use. 
                Their differences are strictly derived from the gender and socioeconomic research on five facets,
                which are detailed in their profiles below. Scroll through each:
               </p>
               
            <article class="card">
                {personas.map((persona, index) => (
                    <figure key={index}>
                        <img src={persona.portrait} alt={`${persona.names} portrait`} />
                        <figcaption>
                            <h3>{persona.names}</h3>
                            <p><strong>Background:</strong> {persona.background.employment}</p>
                            <p><strong>Email Style:</strong> {persona.Email}</p>
                            <p><strong>Motivations:</strong> {persona.motivationsAttitudes.description}</p>
                            <p><strong>Tech Self-Efficacy:</strong> {persona.techSelfEfficacy.description}</p>
                            <p><strong>Attitude Toward Risk:</strong> {persona.attitudeTowardRisk.description}</p>
                            <p><strong>Info Processing Style:</strong> {persona.infoProcessingStyle.description}</p>
                            <p><strong>Learning Style:</strong> {persona.learningStyle.learningDescription}</p>
                            <p><strong>Summary:</strong> {persona.summarySimple}</p>
                        </figcaption>
                    </figure>
                 ))}

                <nav className="proceed">
                   <Link to="/" onClick={handleNextPage} >&larr; Home</Link>
                   <Link to="/facetsPage"   onClick={handleNextPage}>Facets &rarr;</Link>
                </nav>
            </article>
        </>
    )
}

export default PersonasPage;