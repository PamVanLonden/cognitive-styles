import { Link } from 'react-router-dom';

function LearningStyleSurvey(){

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
           <h2>Cognitive Styles Survey, 3 of 5</h2>
           <article>
                <h3></h3>
                <p>To see how you compare to your classmates when learning new technology skills,
                    complete the survey:
                </p>
            <form id="survey">
                <fieldset><legend>Learning Style</legend>
 
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
                    
                    

                    <button type="submit"><Link to="/info-processing-survey">Next page &rarr;</Link></button>

                </fieldset>

                
            </form>
            
           </article>
        </>
    )
}

export default LearningStyleSurvey;