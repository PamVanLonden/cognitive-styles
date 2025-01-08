import { Link } from 'react-router-dom';
import ButtonGroup from '../../utils/ButtonGroup';
import { useSurveyForm } from '../../utils/useSurveyForm'; // Import the custom hook

const SESAttitudeSurvey = () => {
    const { formValues, handleInputChange, handleNextPage } = useSurveyForm();

    return (
        <>
           <h2>Socioeconomic Magnification Facets Survey </h2>
           <article>
                <h3>Part 2 of 6</h3>
                <p>This part of the survey focuses on your attitudes toward risk 
                    when learning new technical skills.</p>
            <form id="survey">
                <fieldset><legend>Attitudes Towards Risk</legend>
 
                <div className="question ">
                    <label htmlFor="atrAvoidAdvancedSections">
                        <span className="circle">2</span> 
                    I avoid "advanced" features or options in&nbsp;
                    {formValues.techOptions || '...'}.
                    </label>
                    <ButtonGroup name="atrAvoidAdvancedSections" onChange={handleInputChange} />
                </div> 

                <div className="question">
                    <label htmlFor="atrAvoidDanger">
                        <span className="circle">3</span> 
                        I avoid activities that are dangerous or risky.
                     </label>

                    <ButtonGroup name="atrAvoidDanger"onChange={handleInputChange} />
                </div> 

                <div className="question">
                    <label htmlFor="atrUseUnproven">
                        <span className="circle">4</span> 
                        Despite the risks, I use features in&nbsp;
                        {formValues.techOptions || '...'}&nbsp;that 
                        haven't been proven to work.
                     </label>

                    <ButtonGroup name="atrUseUnproven" onChange={handleInputChange} />
                </div>

                <nav className="proceed" role="navigation" aria-label="Proceed to the next most logical page.">
                   <Link to="/ses-selfefficacy">&larr; Previous page</Link>
                   <Link to="/ses-control"  onClick={handleNextPage}>Next page &rarr;</Link>
                </nav>
                </fieldset>
            </form>
           </article>
        </>
    )
}

export default SESAttitudeSurvey;