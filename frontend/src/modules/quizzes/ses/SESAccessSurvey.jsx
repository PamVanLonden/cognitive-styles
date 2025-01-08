import { Link } from 'react-router-dom';
import ButtonGroup from '../../utils/ButtonGroup';
import { useSurveyForm } from '../../utils/useSurveyForm'; // Import the custom hook

const SESAccessSurvey = () => {
    const { formValues, handleInputChange, handleNextPage } = useSurveyForm();

    return (
        <>
           <h2>Socioeconomic Magnification Facets Survey </h2>
           <article>
                <h3>Part 6 of 6</h3>
                <p>This part of the survey focuses on your 
                    access to reliable technology. </p>
            <form id="survey">
                <fieldset><legend>Access to Reliable Technology</legend>
 
                <div className="question ">
                    <label htmlFor="artShare"><span className="circle">22</span> 
                    I share a mobile device or computer with family, work, friends, or at public library.
                    </label>
                    <ButtonGroup name="artShare" onChange={handleInputChange} />
                </div> 

                <div className="question">
                    <label htmlFor="artReliable">
                        <span className="circle">23</span> 
                        The mobile devices or computers that I usually use are reliable.
                     </label>
                    <ButtonGroup name="artReliable"onChange={handleInputChange} />
                </div> 

                <div className="question">
                    <label htmlFor="artInternet">
                        <span className="circle">24</span> 
                        I can get access to internet connections that are reliable enough for my purposes.
                     </label>
                    <ButtonGroup name="artInternet" onChange={handleInputChange} />
                </div>

                <div className="question">
                    <label htmlFor="artOwn">
                        <span className="circle">25</span> 
                        I have (for my own use), this many mobile devices or computers in my household:
                        {/* (dropdown 0/1/2/more than 2) */}
                        </label>
                        <div className="selectGroup">
                            <select name="artOwn" onChange={handleInputChange} >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="more">more</option>
                            </select>
                        </div>
                     
                    {/* <ButtonGroup  /> */}
                </div>


                <nav className="proceed" role="navigation" aria-label="Proceed to the next most logical page.">
                   <Link to="/ses-comms">&larr; Previous page</Link>
                   <Link to="/ses-summary"  onClick={handleNextPage}>Summary &rarr;</Link>
                </nav>
                </fieldset>
            </form>
           </article>
        </>
    )
}

export default SESAccessSurvey;