import { Link } from 'react-router-dom';
import { useSurveyForm } from './utils/useSurveyForm'; 

function HomePage(){
    const { handleNextPage } = useSurveyForm();
    return (
        <>
           <h2>Welcome!</h2>
           <article>
                <h3>Introduction</h3>

                <p>Do you sometimes feel that you do not belong in this program, or some of its courses?
                   The instructors assure you that you do belong! 
                   To help combat that sense of imposter syndrome that you might be feeling, 
                   let's explore the notion that your cognitive styles of learning are 
                   similar to your peers' learning styles. </p>


                <p>You may already know that OSU and other universities have studied course materials and technical tools to
                   make improvements that level the playing field amongst you and your peers. 
                   Programs such as <a href="https://gendermag.org/Docs/Cognitive-Style-Heuristics-from-the-GenderMag-Project-2021-03-07-1537.pdf" target="_blank">
                    Cognitive Style Heuristics</a> and <a href="https://gendermag.org/" target="_blank">GenderMag/InclusiveMag</a> study 
                    differences in how people problem-solve while learning new technical skills.
                    
                    The projects' core methods of finding bias bugs in software and materials
                    is to apply <strong>personas</strong> that represent different sets of <strong>cognitive facets</strong>.
                </p>

                
                <p>Explore the Facets and Personas by clicking on the tabs at the top, 
                    then analyze which persona fits you best, by taking the <strong>Survey</strong>.</p>

                <p>Below is a diagram of how the Personas and Facets relate:</p>
                <img src="./images/persona-scale-faces.png" alt="Diagram of how the Personas and Facets relate." title="" />

                <nav className="proceed">
                   <Link className="off"></Link>
                   <Link to="/personasPage"  onClick={handleNextPage}>Personas &rarr;</Link>
                </nav>

            </article>
        </>
    )
}

export default HomePage;