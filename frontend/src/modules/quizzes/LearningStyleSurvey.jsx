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
                        <label htmlFor="lsSpreadsheets"><span class="circle">6.</span> 
                        I enjoy finding the lesser-known features and capabilities of&nbsp;
                        <select 
                            name="lsSpreadsheets" 
                            value={formValues.lsSpreadsheets || ''} 
                            onChange={handleInputChange}
                        >
                            <option value="">choose...</option>
                            <option value="Microsoft Excel">Microsoft Excel</option>
                            <option value="Google Sheets">Google Sheets</option>
                            <option value="Apple Numbers">Apple Numbers</option>
                        </select>.
                    </label>
                    <ButtonGroup name="lsSpreadsheetsRating" onChange={handleInputChange} />
                </div>


                <div className="question">
                    <label htmlFor="lsSpreadsheetExplore">
                        <span class="circle">7.</span> &nbsp;
                        I explore areas of the chose app before it is time for me to use it.
                     </label>

                    <ButtonGroup name="lsSpreadsheetExplore" onChange={handleInputChange}  />
                </div> 

                <div className="question">
                    <label htmlFor="lsSpreadsheetCustomize">
                        <span class="circle">8.</span> &nbsp;
                        I'm never satisfied with the default settings of the chosen app, so I customize it.
                     </label>

                    <ButtonGroup name="lsSpreadsheetCustomize"  onChange={handleInputChange} />
                </div>

                    
                <nav className="proceed">
                    <button><Link to="/motivation-survey">&larr; Previous page</Link></button>
                    <button type="submit" onClick={handleNextPage}>
                        <Link to="/info-processing-survey">Next page &rarr;</Link>
                    </button>
                </nav>
                </fieldset>
            </form>
           </article>
        </>
    )
}

export default LearningStyleSurvey;