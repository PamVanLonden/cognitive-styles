import { Link } from 'react-router-dom';
import ButtonGroup from '../utils/ButtonGroup';
import { useSurveyForm } from '../utils/useSurveyForm'; // Import the custom hook


const InformationProcessingSurvey = () => {
    const { formValues, handleInputChange, handleNextPage } = useSurveyForm();

    return (
        <>
           <h2>Cognitive Styles Survey</h2>
           <article>
                <h3>Part 4 of 5</h3>
                <p>This part of the survey focuses on how you process information. </p>
            <form id="survey">
                <fieldset><legend>Information Processing Style</legend>
 
                <div className="question">
                    <label htmlFor="ipsGatherInfo">
                        <span class="circle">9.</span> &nbsp;
                        I want to get things right the first time, 
                        so before I decide how to take action, 
                        I gather as much information as I can.
                     </label>

                    <ButtonGroup name="ipsGatherInfo"  onChange={handleInputChange}/>
                </div> 

                <div className="question">
                    <label htmlFor="ipsResearch">
                        <span class="circle">10.</span> &nbsp;
                        I always do extensive research and comparison shopping 
                        before making important purchases.
                     </label>

                    <ButtonGroup name="ipsResearch"  onChange={handleInputChange}/>
                </div> 

                <div className="question">
                    <label htmlFor="ipsUnderstandDirection">
                        <span class="circle">11.</span> &nbsp;
                        When a decision needs to be made, 
                        it is important for me to gather relevant details before deciding, 
                        in order to be sure of the direction we are heading.
                     </label>

                    <ButtonGroup name="ipsUnderstandDirection"  onChange={handleInputChange}/>
                </div>

                    
                <nav className="proceed">
                   <Link to="/learning-style-survey">&larr; Previous page</Link> 
                   <Link to="/attitude-risk-survey" onClick={handleNextPage}>Next page &rarr;</Link>
                </nav>
                </fieldset>
            </form>
           </article>
        </>
    )
}

export default InformationProcessingSurvey;