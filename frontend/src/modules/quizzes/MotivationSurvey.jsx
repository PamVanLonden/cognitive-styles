import {Link} from 'react-router-dom';
import ButtonGroup from '../utils/SelectedOptions.jsx';
 

function MotivationSurvey(){
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
                        <span class="circle">3.</span> &nbsp;
                        I make time to explore &nbsp;
                        <select>
                            <option>Microsoft apps</option>
                            <option>Google apps</option>
                            <option>Apple apps</option>
                        </select> {''} that are not critical to my job.
                     </label>

                    <ButtonGroup name="mSuiteApps" />
                </div> 

                <div className="question">
                    <label htmlFor="mSuiteLookGood">
                        <span class="circle">4.</span> &nbsp;
                        One reason I spend time and money on the chosen app suite 
                        {/* &nbsp; <select>
                            <option>Microsoft apps</option>
                            <option>Google apps</option>
                            <option>Apple apps</option>
                        </select>  */}
                        is because it is a way for me to look good with peers.
                     </label>

                    <ButtonGroup name="mSuiteLookGood" />
                </div> 

                <div className="question">
                    <label htmlFor="mSuiteTester">
                        <span class="circle">5.</span> &nbsp;
                        It's fun to try new  
                        {/* &nbsp; <select>
                            <option>Microsoft apps</option>
                            <option>Google apps</option>
                            <option>Apple apps</option>
                        </select>  */}
                        apps that are not yet available to everyone, 
                        such as being a participant in beta programs to test unfinished apps.
                     </label>

                    <ButtonGroup name="mSuiteTester" />
                </div>

                    
                    <nav className="proceed">
                        <button><Link to="/self-efficacy-survey">&larr; Previous page</Link></button>
                        <button type="submit"><Link to="/learning-style-survey">Next page &rarr;</Link></button>
                    </nav>
                </fieldset>
            </form>
           </article>
        </>
    )
}

export default MotivationSurvey;