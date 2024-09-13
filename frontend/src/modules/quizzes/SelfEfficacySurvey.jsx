import { Link } from 'react-router-dom';
import ButtonGroup from '../utils/ButtonGroup.jsx';
import { useSurveyForm } from '../utils/useSurveyForm'; // Import the custom hook


const SelfEfficacySurvey = () => {
    const { formValues, handleInputChange, handleNextPage } = useSurveyForm();

    return (
        <>
           <h2>Cognitive Styles Survey </h2>
           <article>
                <h3>Part 1 of 5</h3>
                <p>This part of the survey focuses on your confidence in your ability to achieve specific goals or tasks.</p>
                <p>To see how you compare to your classmates when learning new technology skills,
                    complete the survey:
                </p>
            <form id="survey">
                <fieldset><legend>Self-efficacy</legend>
 
                    <div className="question ">
                      
                        <label htmlFor="sefEmailHelp"><span class="circle">1.</span> 
                        I am able to use the &nbsp;
                        <select 
                            name="sefEmailHelp" 
                            value={formValues.sefEmailHelp || ''} 
                            onChange={handleInputChange}
                        >
                            <option value="">choose...</option>
                            <option value="Microsoft Outlook">Microsoft Outlook</option>
                            <option value="Google Calendar">Google Calendar</option>
                            <option value="Apple iCal">Apple iCal</option>
                        </select> email program when I have just the built-in "Help" menu for assistance.&nbsp;
                        </label>
                        <ButtonGroup name="sefEmailHelpRating" onChange={handleInputChange} />
                    </div>
                    
                    <div className="question indent">
                        <label htmlFor="sefEmailWatched">
                            ...I have seen someone else using it before trying it myself.&nbsp;
                        </label>
                        <ButtonGroup name="sefEmailWatched" onChange={handleInputChange} />
                    </div>
                    
                    <div className="question indent">
                    <label htmlFor="sefEmailNoOne">
                        ...no one is around to help me if I need it.&nbsp;</label>
                        <ButtonGroup name="sefEmailNoOne" onChange={handleInputChange} />
                    </div>
                    
                    <div className="question indent">
                        <label htmlFor="sefEmailSomeoneHelped">
                        ...someone else has helped me get started.&nbsp;</label>
                        <ButtonGroup name="sefEmailSomeoneHelped" onChange={handleInputChange} />
                    </div>
                    
                    <div className="question indent">
                    <label htmlFor="sefEmailShown">
                        ...someone has shown me how to do it first.&nbsp;</label>
                        <ButtonGroup name="sefEmailShown" onChange={handleInputChange} />
                    </div>
                    
                    <div className="question indent">
                    <label htmlFor="sefEmailSimilar">
                        ...I have used similar technology before to do the same task.&nbsp;</label>
                        <ButtonGroup name="sefEmailSimilar" onChange={handleInputChange} />
                    </div>

                    <div className="question indent">
                    <label htmlFor="sefEmailNever">
                        ...I have never used anything like it before.&nbsp;</label>
                        <ButtonGroup name="sefEmailNever" onChange={handleInputChange} />
                    </div>

                    <div className="question">
                    <label htmlFor="sefEmailConfidence">
                        <span class="circle">2.</span> &nbsp;
                        I am not confident about my ability to use and learn the selected email program. 
                        I have other strengths.&nbsp;</label>
                        <ButtonGroup name="sefEmailConfidence" onChange={handleInputChange} />
                     </div>
                     
                     <nav className="proceed">
                        <button class="off"></button>
                        <button type="submit" onClick={handleNextPage}>
                            <Link to="/motivation-survey">Next page &rarr;</Link>
                        </button>
                    </nav>
                </fieldset>
            </form>
           </article>
        </>
    );
};

export default SelfEfficacySurvey;