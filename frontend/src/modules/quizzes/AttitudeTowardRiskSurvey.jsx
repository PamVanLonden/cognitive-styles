import { Link } from 'react-router-dom';
import ButtonGroup from '../utils/SelectedOptions.jsx';

function AttitudeTowardRiskSurvey(){
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

                    <ButtonGroup name="atrAvoidAdvancedSections" />
                </div> 

                <div className="question">
                    <label htmlFor="ipsAvoidDanger">
                        <span class="circle">13.</span> &nbsp;
                        I avoid activities that are dangerous or risky.
                     </label>

                    <ButtonGroup name="ipsAvoidDanger" />
                </div> 

                <div className="question">
                    <label htmlFor="ipsUseUnproven">
                        <span class="circle">14.</span> &nbsp;
                        Despite the risks, I use features in the chosen app 
                        that haven't been proven to work.
                     </label>

                    <ButtonGroup name="ipsUseUnproven" />
                </div>

                    
                <nav className="proceed">
                    <button><Link to="/info-processing-survey">&larr; Previous page</Link></button>
                    <button type="submit"><Link to="/survey-summary">Summary &rarr;</Link></button>
                </nav>
                </fieldset>
            </form>
           </article>
        </>
    )
}

export default AttitudeTowardRiskSurvey;