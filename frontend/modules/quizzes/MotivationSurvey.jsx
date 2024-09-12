import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { SurveyContext } from '../utils/SurveyContext';
import ButtonGroup from '../utils/SelectedOptions';
 

function MotivationSurvey(){
    const { addSurveyData } = useContext(SurveyContext);
    const [formValues, setFormValues] = useState({
        // Store the ButtonGroup values
        mSuiteApps: '', 
        mSuiteLookGood: '',
        mSuiteTester: '',
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
                <h3>Part 2 of 5</h3>
                <p>This part of the survey focuses on your motivations for using a new technology.</p>
            <form id="survey">
                <fieldset><legend>Motivations</legend>
 
                <div className="question">
                    <label htmlFor="mSuiteApps">
                        <span class="circle">3.</span> 
                        I make time to explore 
                        <select>
                            <option>Microsoft apps</option>
                            <option>Google apps</option>
                            <option>Apple apps</option>
                        </select> {''} that are not critical to my job.
                     </label>
                    <ButtonGroup name="mSuiteApps" onChange={handleInputChange} />
                </div> 

                <div className="question">
                    <label htmlFor="mSuiteLookGood">
                        <span class="circle">4.</span> 
                        One reason I spend time and money on the chosen app suite 
                        {/*  <select>
                            <option>Microsoft apps</option>
                            <option>Google apps</option>
                            <option>Apple apps</option>
                        </select>  */}
                        is because it is a way for me to look good with peers.
                     </label>
                    <ButtonGroup name="mSuiteLookGood" onChange={handleInputChange} />
                </div> 

                <div className="question">
                    <label htmlFor="mSuiteTester">
                        <span class="circle">5.</span> 
                        It's fun to try new  
                        {/*  <select>
                            <option>Microsoft apps</option>
                            <option>Google apps</option>
                            <option>Apple apps</option>
                        </select>  */}
                        apps that are not yet available to everyone, 
                        such as being a participant in beta programs to test unfinished apps.
                     </label>
                    <ButtonGroup name="mSuiteTester" onChange={handleInputChange} />
                </div>

                    
                    <nav className="proceed">
                        <button><Link to="/self-efficacy-survey">&larr; Previous page</Link></button>
                        <button type="submit" onClick={handleNextPage}>
                            <Link to="/learning-style-survey">Next page &rarr;</Link>
                        </button>
                    </nav>
                </fieldset>
            </form>
           </article>
        </>
    )
}

export default MotivationSurvey;