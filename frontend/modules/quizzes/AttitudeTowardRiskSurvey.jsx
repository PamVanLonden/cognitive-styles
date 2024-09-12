import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { SurveyContext } from '../utils/SurveyContext';
import ButtonGroup from '../utils/SelectedOptions';
 

function AttitudeTowardRiskSurvey(){
    const { addSurveyData } = useContext(SurveyContext);
    const [formValues, setFormValues] = useState({
        // Store the ButtonGroup values
        atrAvoidAdvancedSections: '', 
        atrAvoidDanger: '',
        atrUseUnproven: '',
    });

    const handleInputChange = (name, value) => {
        setFormValues({ ...formValues, [name]: value });
    };

    const handleNextPage = () => {
        addSurveyData(formValues); // Save form values before moving to the next page
    };

    return (
        <>
           <h2>Cognitive Styles Survey</h2>
           <article>
                <h3>Part 5 of 5</h3>
                <p>This part of the survey focuses on your attitudes toward risk 
                    when learning new technical skills.</p>
            <form id="survey">
                <fieldset><legend>Attitudes towards risk</legend>
 
                <div className="question">
                    <label htmlFor="atrAvoidAdvancedSections">
                        <span class="circle">12.</span> &nbsp;
                        I avoid "advanced" buttons or sections in 
                        <select>
                            <option>Microsoft Excel</option>
                            <option>Google Sheets</option>
                            <option>Apple Numbers</option>
                        </select> {''}.
                     </label>

                    <ButtonGroup name="atrAvoidAdvancedSections" onChange={handleInputChange} />
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