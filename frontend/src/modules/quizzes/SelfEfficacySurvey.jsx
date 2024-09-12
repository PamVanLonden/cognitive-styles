import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { SurveyContext } from '../utils/SurveyContext';
import ButtonGroup from '../utils/SelectedOptions';
 

function SelfEfficacySurvey(){
    const { addSurveyData } = useContext(SurveyContext);
    const [formValues, setFormValues] = useState({
        // Store the ButtonGroup values
        sEFEmailHelp: '', 
        sEFEmailWatched: '',
        sEFEmailNoOne: '',
        sEFEmailSomeoneHelped: '',
        sEFEmailShown: '',
        sEFEmailSimilar: '',
        sEFEmailNever: '',
        sEFEmailConfidence: '',
       
    });


    const handleInputChange = (name, value) => {
        setFormValues({ ...formValues, [name]: value });
    };

    const handleNextPage = () => {
        addSurveyData(formValues); // Save form values before moving to the next page
    };

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
 
                    <p><span class="circle">1.</span> I am able to use the &nbsp;
                        <select>
                            <option>Microsoft Outlook</option>
                            <option>Google Calendar</option>
                            <option>Apple iCal</option>
                        </select>  {''} email program when...
                    </p>
                    
                    <div className="question"> 
                        <label htmlFor="sEFEmailHelp">
                            ...I have just the built-in "Help" menu for assistance.&nbsp;
                        </label>
                        <ButtonGroup name="sEFEmailHelp" onChange={handleInputChange} />
                    </div>
                    
                    <div className="question">
                        <label htmlFor="sEFEmailWatched">
                            ...I have seen someone else using it before trying it myself.&nbsp;
                        </label>
                        <ButtonGroup name="sEFEmailWatched" onChange={handleInputChange} />
                    </div>
                    
                    <div className="question">
                    <label htmlFor="sEFEmailNoOne">
                        ...no one is around to help me if I need it.&nbsp;</label>
                        <ButtonGroup name="sEFEmailNoOne" onChange={handleInputChange} />
                    </div>
                    
                    <div className="question">
                        <label htmlFor="sEFEmailSomeoneHelped">
                            ...someone else has helped me get started.&nbsp;</label>
                        <ButtonGroup name="sEFEmailSomeoneHelped" onChange={handleInputChange} />
                    </div>
                    
                    <div className="question">
                    <label htmlFor="sEFEmailShown">
                        ...someone has shown me how to do it first.&nbsp;</label>
                        <ButtonGroup name="sEFEmailShown" onChange={handleInputChange} />
                    </div>
                    
                    <div className="question">
                    <label htmlFor="sEFEmailSimilar">
                        ...I have used similar technology before to do the same task.&nbsp;</label>
                        <ButtonGroup name="sEFEmailSimilar" onChange={handleInputChange} />
                    </div>

                    <div className="question">
                    <label htmlFor="sEFEmailNever">
                        ...I have never used anything like it before.&nbsp;</label>
                        <ButtonGroup name="sEFEmailNever" onChange={handleInputChange} />
                    </div>

                    <div className="question">
                    <label htmlFor="sEFEmailConfidence">
                        <span class="circle">2.</span> &nbsp;
                        I am not confident about my ability to use and learn the selected email program. 
                        I have other strengths.&nbsp;</label>

                        <ButtonGroup name="sEFEmailConfidence" onChange={handleInputChange} />
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
    )
}

export default SelfEfficacySurvey;