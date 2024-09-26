import { Link } from 'react-router-dom';
import ButtonGroup from '../utils/ButtonGroup';
import { useSurveyForm } from '../utils/useSurveyForm'; // Import the custom hook

const AttitudeTowardRiskSurvey = () => {
    const { formValues, handleInputChange, handleNextPage } = useSurveyForm();

    return (
        <>
           <h2>Cognitive Styles Survey</h2>
           <article>
                <h3>Part 5 of 5</h3>
                <p>This part of the survey focuses on your attitudes toward risk 
                    when learning new technical skills.</p>
            <form id="survey">
                <fieldset><legend>Attitudes Towards Risk</legend>
 
                <div className="question ">
                    <label htmlFor="atrAvoidAdvancedSections"><span className="circle">12.</span> 
                    I avoid "advanced" buttons or sections in&nbsp;
                    {formValues.techOptions || '...'}.
                    </label>
                    <ButtonGroup name="atrAvoidAdvancedSections" onChange={handleInputChange} />
                </div> 

                <div className="question">
                    <label htmlFor="atrAvoidDanger">
                        <span className="circle">13.</span> 
                        I avoid activities that are dangerous or risky.
                     </label>

                    <ButtonGroup name="atrAvoidDanger"onChange={handleInputChange} />
                </div> 

                <div className="question">
                    <label htmlFor="atrUseUnproven">
                        <span className="circle">14.</span> 
                        Despite the risks, I use features in&nbsp;
                        {formValues.techOptions || '...'}&nbsp;that 
                        haven't been proven to work.
                     </label>

                    <ButtonGroup name="atrUseUnproven" onChange={handleInputChange} />
                </div>

                <nav className="proceed">
                   <Link to="/info-processing-survey">&larr; Previous page</Link>
                   <Link to="/survey-summary"  onClick={handleNextPage}>Summary &rarr;</Link>
                </nav>
                </fieldset>
            </form>
           </article>
        </>
    )
}

export default AttitudeTowardRiskSurvey;