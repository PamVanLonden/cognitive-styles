import { Link } from 'react-router-dom';
import ButtonGroup from '../../utils/ButtonGroup';
import { useSurveyForm } from '../../utils/useSurveyForm'; // Import the custom hook

const SESControlAuthoritySurvey = () => {
    const { formValues, handleInputChange, handleNextPage } = useSurveyForm();

    return (
        <>
           <h2>Socioeconomic Magnification Facets Survey </h2>
           <article>
                <h3>Part 3 of 6</h3>
                <p>This part of the survey focuses on your 
                    percieved control and authority over technology, 
                    when learning new technical skills.</p>
            <form id="survey">
                <fieldset><legend>Percieved Control and Authority</legend>
 
                <div className="question ">
                    <label htmlFor="caMost"><span className="circle">5</span> 
                    I feel I have control over what happens in most situations. 
                    </label>
                    <ButtonGroup name="caMost" onChange={handleInputChange} />
                </div> 

                <div className="question">
                    <label htmlFor="caOften">
                        <span className="circle">7</span> 
                        I often have the feeling that I am being treated unfairly.
                     </label>
                    <ButtonGroup name="caOften"onChange={handleInputChange} />
                </div> 

                <div className="question">
                    <label htmlFor="caHaveControl">
                        <span className="circle">8</span> 
                        I feel I have control over what happens when I work with technology.
                     </label>
                    <ButtonGroup name="caHaveControl" onChange={handleInputChange} />
                </div>

                <div className="question">
                    <label htmlFor="caTechUnfair">
                        <span className="circle">10</span> 
                        I often have the feeling that technology ends up treating me unfairly.
                     </label>
                    <ButtonGroup name="caTechUnfair" onChange={handleInputChange} />
                </div>

                <nav className="proceed" role="navigation" aria-label="Proceed to the next most logical page.">
                   <Link to="/ses-risk">&larr; Previous page</Link>
                   <Link to="/ses-privacy"  onClick={handleNextPage}>Next page &rarr;</Link>
                </nav>
                </fieldset>
            </form>
           </article>
        </>
    )
}

export default SESControlAuthoritySurvey;