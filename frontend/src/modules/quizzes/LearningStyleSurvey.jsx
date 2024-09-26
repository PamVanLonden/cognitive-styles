import { Link } from 'react-router-dom';
import ButtonGroup from '../utils/ButtonGroup';
import { useSurveyForm } from '../utils/useSurveyForm'; // Import the custom hook

const LearningStyleSurvey = () => {
    const { formValues, handleInputChange, handleNextPage } = useSurveyForm();

    return (
        <>
           <h2>Cognitive Styles Survey</h2>
           <article>
                <h3>Part 3 of 5</h3>
                <p>This part of the survey focuses on your style of learning new technology.</p>
            <form id="survey">
                <fieldset><legend>Learning Style</legend>
                <div className="question ">
                        <label htmlFor="lsLesserKnownFeatures"><span className="circle">6.</span> 
                        I enjoy finding the lesser-known features and capabilities of&nbsp;
                        {formValues.techOptions || '...'}.
                    </label>
                    <ButtonGroup name="lsLesserKnownFeatures" onChange={handleInputChange} />
                </div>


                <div className="question">
                    <label htmlFor="lsLookAhead">
                        <span className="circle">7.</span> 
                        I explore areas of {formValues.techOptions || '...'}&nbsp;before 
                        it is time for me to use them.
                     </label>
                    <ButtonGroup name="lsLookAhead" onChange={handleInputChange}  />
                </div> 

                <div className="question">
                    <label htmlFor="lsUpdateSettings">
                        <span className="circle">8.</span> &nbsp;
                        I'm never satisfied with the default settings of {formValues.techOptions || '...'},
                        so I customize it.
                     </label>
                    <ButtonGroup name="lsUpdateSettings"  onChange={handleInputChange} />
                </div>

                <nav className="proceed">
                   <Link to="/motivation-survey">&larr; Previous page</Link> 
                   <Link to="/info-processing-survey" onClick={handleNextPage}>Next page &rarr;</Link>
                </nav>
                </fieldset>
            </form>
           </article>
        </>
    )
}

export default LearningStyleSurvey;