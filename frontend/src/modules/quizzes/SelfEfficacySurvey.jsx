import {Link} from 'react-router-dom';

function SelfEfficacySurvey(){

    // Select all button groups
        const buttonGroups = document.querySelectorAll('.buttonGroup');

        // Loop through each button group
        buttonGroups.forEach(group => {
            const buttons = group.querySelectorAll('button');
            
            buttons.forEach(button => {
                button.addEventListener('click', () => {
                // Remove 'selected' class from all buttons in this group
                buttons.forEach(btn => btn.classList.remove('selected'));
                
                // Add 'selected' class to the clicked button
                button.classList.add('selected');
                });
            });
        });




    return (
        <>
           <h2>Cognitive Styles Survey, 1 of 5</h2>
           <article>
                <h3></h3>
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
                        </select> email program when...
                    </p>
                    
                    <div class="question"> 
                    <label htmlFor="sEFEmailHelp">
                        ...I have just the build-in "Help" menu for assistance.&nbsp;
                    </label>
                    <aside class="buttonGroup">
                        <p class="scale">
                        <button type="button" name="sEFEmailHelp"  value="1">1</button>
                        <button type="button" name="sEFEmailHelp"  value="2">2</button>
                        <button type="button" name="sEFEmailHelp"  value="3">3</button>
                        <button type="button" name="sEFEmailHelp"  value="4">4</button>
                        <button type="button" name="sEFEmailHelp"  value="5">5</button>
                        <button type="button" name="sEFEmailHelp"  value="6">6</button>
                        <button type="button" name="sEFEmailHelp"  value="7">7</button>
                        <button type="button" name="sEFEmailHelp"  value="8">8</button>
                        <button type="button" name="sEFEmailHelp"  value="9">9</button>
                        </p>
                    </aside>
                    </div>
                    
                    <div class="question">
                    <label htmlFor="sEFEmailWatched">
                        ...I have seen someone else using it before trying it myself.&nbsp;
                    </label>
                    <aside class="buttonGroup">
                        <p class="scale">
                        <button type="button" name="sEFEmailWatched"  value="1">1</button>
                        <button type="button" name="sEFEmailWatched"  value="2">2</button>
                        <button type="button" name="sEFEmailWatched"  value="3">3</button>
                        <button type="button" name="sEFEmailWatched"  value="4">4</button>
                        <button type="button" name="sEFEmailWatched"  value="5">5</button>
                        <button type="button" name="sEFEmailWatched"  value="6">6</button>
                        <button type="button" name="sEFEmailWatched"  value="7">7</button>
                        <button type="button" name="sEFEmailWatched"  value="8">8</button>
                        <button type="button" name="sEFEmailWatched"  value="9">9</button>
                        </p>
                    </aside>
                    </div>
                    
                    <div class="question">
                    <label htmlFor="sEFEmailSomeoneHelped">
                        ...no one is around to help me if I need it.&nbsp;</label>
                    <aside class="buttonGroup">
                        <p class="scale">
                        <button type="button" name="sEFEmailSomeoneHelped" value="1">1</button>
                        <button type="button" name="sEFEmailSomeoneHelped"  value="2">2</button>
                        <button type="button" name="sEFEmailSomeoneHelped"  value="3">3</button>
                        <button type="button" name="sEFEmailSomeoneHelped"  value="4">4</button>
                        <button type="button" name="sEFEmailSomeoneHelped"  value="5">5</button>
                        <button type="button" name="sEFEmailSomeoneHelped"  value="6">6</button>
                        <button type="button" name="sEFEmailSomeoneHelped"  value="7">7</button>
                        <button type="button" name="sEFEmailSomeoneHelped"  value="8">8</button>
                        <button type="button" name="sEFEmailSomeoneHelped"  value="9">9</button>
                        </p>
                    </aside>
                    </div>
                    
                    <div class="question">
                    <label htmlFor="sEFEmailSomeoneHelped">...someone else has helped me get started.&nbsp;</label>
                    <aside class="buttonGroup">
                        <p class="scale">
                        <button type="button" name="sEFEmailSomeoneHelped" value="1">1</button>
                        <button type="button" name="sEFEmailSomeoneHelped"  value="2">2</button>
                        <button type="button" name="sEFEmailSomeoneHelped"  value="3">3</button>
                        <button type="button" name="sEFEmailSomeoneHelped"  value="4">4</button>
                        <button type="button" name="sEFEmailSomeoneHelped"  value="5">5</button>
                        <button type="button" name="sEFEmailSomeoneHelped"  value="6">6</button>
                        <button type="button" name="sEFEmailSomeoneHelped"  value="7">7</button>
                        <button type="button" name="sEFEmailSomeoneHelped"  value="8">8</button>
                        <button type="button" name="sEFEmailSomeoneHelped"  value="9">9</button>
                        </p>
                    </aside>
                    </div>
                    
                    <div class="question">
                    <label htmlFor="sEFEmailShown">
                        ...someone has shown me how to do it first.&nbsp;</label>
                    <aside class="buttonGroup">
                        <p class="scale">
                        <button type="button" name="sEFEmailShown"  value="1">1</button>
                        <button type="button" name="sEFEmailShown"  value="2">2</button>
                        <button type="button" name="sEFEmailShown"  value="3">3</button>
                        <button type="button" name="sEFEmailShown"  value="4">4</button>
                        <button type="button" name="sEFEmailShown"  value="5">5</button>
                        <button type="button" name="sEFEmailShown"  value="6">6</button>
                        <button type="button" name="sEFEmailShown"  value="7">7</button>
                        <button type="button" name="sEFEmailShown"  value="8">8</button>
                        <button type="button" name="sEFEmailShown"  value="9">9</button>
                        </p>
                    </aside>
                    </div>
                    
                    <div class="question">
                    <label htmlFor="sEFEmailSimilar">
                        ...I have used similar technology before to do the same task.&nbsp;</label>
                    <aside class="buttonGroup">
                        <p class="scale">
                        <button type="button" name="sEFEmailSimilar"  value="1">1</button>
                        <button type="button" name="sEFEmailSimilar"  value="2">2</button>
                        <button type="button" name="sEFEmailSimilar"  value="3">3</button>
                        <button type="button" name="sEFEmailSimilar"  value="4">4</button>
                        <button type="button" name="sEFEmailSimilar"  value="5">5</button>
                        <button type="button" name="sEFEmailSimilar"  value="6">6</button>
                        <button type="button" name="sEFEmailSimilar"  value="7">7</button>
                        <button type="button" name="sEFEmailSimilar"  value="8">8</button>
                        <button type="button" name="sEFEmailSimilar"  value="9">9</button>
                        </p>
                    </aside>
                    </div>

                    <div class="question">
                    <label htmlFor="sEFEmailNever">
                        ...I have never used anything like it before.&nbsp;</label>
                    <aside class="buttonGroup">
                        <p class="scale">
                        <button type="button" name="sEFEmailNever"  value="1">1</button>
                        <button type="button" name="sEFEmailNever"  value="2">2</button>
                        <button type="button" name="sEFEmailNever"  value="3">3</button>
                        <button type="button" name="sEFEmailNever"  value="4">4</button>
                        <button type="button" name="sEFEmailNever"  value="5">5</button>
                        <button type="button" name="sEFEmailNever"  value="6">6</button>
                        <button type="button" name="sEFEmailNever"  value="7">7</button>
                        <button type="button" name="sEFEmailNever"  value="8">8</button>
                        <button type="button" name="sEFEmailNever"  value="9">9</button>
                        </p>
                    </aside>
                    </div>

                    <label htmlFor="sEFEmailConfidence">
                        <span class="circle">2.</span> 
                        I am not confident about my ability to use and learn <select>
                            <option>Microsoft Outlook</option>
                            <option>Google Calendar</option>
                            <option>Apple iCal</option>
                        </select> email program. I have other strengths.&nbsp;</label>
                    <aside class="buttonGroup">
                        <p class="scale">
                        <button type="button" name="sEFEmailConfidence"  value="1">1</button>
                        <button type="button" name="sEFEmailConfidence"  value="2">2</button>
                        <button type="button" name="sEFEmailConfidence"  value="3">3</button>
                        <button type="button" name="sEFEmailConfidence"  value="4">4</button>
                        <button type="button" name="sEFEmailConfidence"  value="5">5</button>
                        <button type="button" name="sEFEmailConfidence"  value="6">6</button>
                        <button type="button" name="sEFEmailConfidence"  value="7">7</button>
                        <button type="button" name="sEFEmailConfidence"  value="8">8</button>
                        <button type="button" name="sEFEmailConfidence"  value="9">9</button>
                        </p>
                    </aside>

                    <button type="submit"><Link to="/motivation-survey">Next page &rarr;</Link></button>
                </fieldset>

                
            </form>
            
           </article>
        </>
    )
}

export default SelfEfficacySurvey;