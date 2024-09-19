import { Link } from 'react-router-dom';
import ButtonGroup from '../utils/ButtonGroup';
import { useSurveyForm } from '../utils/useSurveyForm'; // Import the custom hook

const MotivationSurvey = () => {
    const { formValues, handleInputChange, handleNextPage } = useSurveyForm();

    return (
        <>
           <h2>Cognitive Styles Survey</h2>
           <article>
                <h3>Part 2 of 5</h3>
                <p>This part of the survey focuses on your motivations for using a new technology.</p>
            <form id="survey">
                <fieldset><legend>Motivations</legend>
 
                <div className="question ">
                    <label htmlFor="mSuiteApps"><span className="circle">3.</span> 
                     I make time to explore {formValues.techOptions || '...'}.
                    </label>
                    <ButtonGroup name="mSuiteApps" onChange={handleInputChange} />
                </div>

                <div className="question">
                    <label htmlFor="mSuiteLookGood">
                        <span className="circle">4.</span> 
                        One reason I spend time and money on learning {formValues.techOptions || '...'}&nbsp; 
                        is because it is a way for me to look good with peers.
                     </label>
                    <ButtonGroup name="mSuiteLookGood" onChange={handleInputChange} />
                </div> 

                <div className="question">
                    <label htmlFor="mSuiteTester">
                        <span className="circle">5.</span> 
                        It's fun to try new {formValues.techOptions || '...'}&nbsp;
                        features that are not yet available to everyone, 
                        such as being a participant in beta programs to test unfinished apps.
                     </label>
                    <ButtonGroup name="mSuiteTester" onChange={handleInputChange} />
                </div>

                    <nav className="proceed">
                        <Link to="/self-efficacy-survey">&larr; Previous page</Link> 
                        <Link to="/learning-style-survey" onClick={handleNextPage}>Next page &rarr;</Link>
                    </nav>
                </fieldset>
            </form>
           </article>
        </>
    )
}

export default MotivationSurvey;