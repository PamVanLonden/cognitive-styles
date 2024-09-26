import { Link } from 'react-router-dom';
import ButtonGroup from '../utils/ButtonGroup.jsx';
import { useSurveyForm } from '../utils/useSurveyForm'; // Import the custom hook

const SelfEfficacySurvey = () => {
    const { formValues, handleInputChange, handleNextPage, techOptions } = useSurveyForm();
    return (
        <>
           <h2>Cognitive Styles Survey </h2>
           <article>
                <h3>Part 1 of 5</h3>
                <p>This part of the survey focuses on your confidence in your ability to achieve specific goals or tasks.</p>
                <p>To see how you compare to your classmates when learning new technology skills,
                    complete the survey:
                </p>

                <div>
                   <label htmlFor="techOptions"> 
                        For the survey questions, I choose to focus on this technology: &nbsp;
                        <select 
                            name="techOptions" 
                            value={formValues.techOptions || ''} 
                            onChange={handleInputChange}
                        >
                            <option value="">choose...</option>
                                {Object.values(techOptions).map((techOption, index) => (
                            <option key={index} value={techOption}>{techOption}</option>
                            ))}
                    </select>
                    </label>
                </div>

            <form id="survey">
                <fieldset><legend>Self-efficacy</legend>
 
                    <div className="question ">
                      <label htmlFor="sefHelpMenu"> <span className="circle">1.</span>
                        I am able to use {formValues.techOptions || '...'}&nbsp;when 
                        I have just the built-in "Help" menu for assistance. 
                        </label>
                        <ButtonGroup name="sefHelpMenu" onChange={handleInputChange} />
                    </div>
                    
                    <div className="question indent">
                        <label htmlFor="sefWatchedSomeone">
                            I can use  {formValues.techOptions || '...'}&nbsp;when 
                            I have seen someone else using it, 
                            before trying it myself. 
                        </label>
                        <ButtonGroup name="sefWatchedSomeone" onChange={handleInputChange} />
                    </div>
                    
                    <div className="question indent">
                    <label htmlFor="sefNoOneHelped">
                        I can use  {formValues.techOptions || '...'}&nbsp;when 
                        no one is around to help me. </label>
                        <ButtonGroup name="sefNoOneHelped" onChange={handleInputChange} />
                    </div>
                    
                    <div className="question indent">
                        <label htmlFor="sefSomeoneHelped">
                        I can use  {formValues.techOptions || '...'}&nbsp;when 
                        someone else has helped me get started. </label>
                        <ButtonGroup name="sefSomeoneHelped" onChange={handleInputChange} />
                    </div>
                    
                    <div className="question indent">
                    <label htmlFor="sefSomeoneShowedMe">
                        I can use  {formValues.techOptions || '...'}&nbsp;when 
                        someone has shown me how to do it first. </label>
                        <ButtonGroup name="sefSomeoneShowedMe" onChange={handleInputChange} />
                    </div>
                    
                    <div className="question indent">
                    <label htmlFor="sefUsedSimilar">
                        I can use  {formValues.techOptions || '...'}&nbsp;because 
                        I have used similar technology before to do the same task. </label>
                        <ButtonGroup name="sefUsedSimilar" onChange={handleInputChange} />
                    </div>

                    <div className="question indent">
                    <label htmlFor="sefNeverUsed">
                        I am confident I can use  {formValues.techOptions || '...'}&nbsp;even 
                        though I have never used anything like it before. </label>
                        <ButtonGroup name="sefNeverUsed" onChange={handleInputChange} />
                    </div>

                    <div className="question">
                    <label htmlFor="sefNoConfidence">
                        <span className="circle">2.</span> &nbsp;
                        I am not confident about my ability to use and learn {formValues.techOptions || '...'}. 
                        I have other strengths. </label>
                        <ButtonGroup name="sefNoConfidence" onChange={handleInputChange} />
                     </div>
                     
                     <nav className="proceed">
                        <Link className="off"></Link>
                        <Link to="/motivation-survey" onClick={handleNextPage}>Next page &rarr;</Link>
                    </nav>
                </fieldset>
            </form>
           </article>
        </>
    );
};

export default SelfEfficacySurvey;