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
                <fieldset><legend>Attitudes towards risk</legend>
 
                <div className="question ">
                    <label htmlFor="atrAvoidAdvancedSections"><span class="circle">6.</span> 
                    I avoid "advanced" buttons or sections in&nbsp;
                    <select 
                            name="atrAvoidAdvancedSections" 
                            value={formValues.atrAvoidAdvancedSections || ''} 
                            onChange={handleInputChange}
                        >
                        <option value="">choose...</option>
                        <option value="Microsoft Excel">Microsoft Excel</option>
                        <option value="Google Sheets">Google Sheets</option>
                        <option value="Apple Numbers">Apple Numbers</option>
                    </select>.
                    </label>
                    <ButtonGroup name="atrAvoidAdvancedSectionsRatings" onChange={handleInputChange} />
                </div> 

                <div className="question">
                    <label htmlFor="atrAvoidDanger">
                        <span class="circle">13.</span> &nbsp;
                        I avoid activities that are dangerous or risky.
                     </label>

                    <ButtonGroup name="atrAvoidDanger"onChange={handleInputChange} />
                </div> 

                <div className="question">
                    <label htmlFor="atrUseUnproven">
                        <span class="circle">14.</span> &nbsp;
                        Despite the risks, I use features in the chosen app 
                        that haven't been proven to work.
                     </label>

                    <ButtonGroup name="atrUseUnproven" onChange={handleInputChange} />
                </div>

                    
                <nav className="proceed">
                    <button><Link to="/info-processing-survey">&larr; Previous page</Link></button>
                    <button type="submit" onClick={handleNextPage}>
                        <Link to="/survey-summary">Summary &rarr;</Link>
                    </button>
                </nav>
                </fieldset>
            </form>
           </article>
        </>
    )
}

export default AttitudeTowardRiskSurvey;