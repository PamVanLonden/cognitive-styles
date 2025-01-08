import { Link } from 'react-router-dom';
import ButtonGroup from '../../utils/ButtonGroup';
import { useSurveyForm } from '../../utils/useSurveyForm'; // Import the custom hook

const SESPrivacySecuritySurvey = () => {
    const { formValues, handleInputChange, handleNextPage } = useSurveyForm();

    return (
        <>
           <h2>Socioeconomic Magnification Facets Survey </h2>
           <article>
                <h3>Part 4 of 6</h3>
                <p>This part of the survey focuses on your 
                    percieved privacy and security 
                    when learning new technical skills.</p>
            <form id="survey">
                <fieldset><legend>Privacy and Security</legend>
 
                <div className="question ">
                    <label htmlFor="psCameras"><span className="circle">11</span> 
                    Video cameras in public places that police can view help me feel safe in isolated places/night. 
                    </label>
                    <ButtonGroup name="psCameras" onChange={handleInputChange} />
                </div> 

                <div className="question">
                    <label htmlFor="psFullName">
                        <span className="circle">12</span> 
                        I do not mind using my full name on social media.
                     </label>
                    <ButtonGroup name="psFullName"onChange={handleInputChange} />
                </div> 

                <div className="question">
                    <label htmlFor="psPictures">
                        <span className="circle">14</span> 
                        I do not want pictures of me on the internet or social media.
                     </label>
                    <ButtonGroup name="psPictures" onChange={handleInputChange} />
                </div>

                <div className="question">
                    <label htmlFor="psDelete">
                        <span className="circle">13</span> 
                        I delete messages/posts/data from my mobile/social media to guard my personal data.
                     </label>
                    <ButtonGroup name="psDelete" onChange={handleInputChange} />
                </div>

                <nav className="proceed" role="navigation" aria-label="Proceed to the next most logical page.">
                   <Link to="/ses-control">&larr; Previous page</Link>
                   <Link to="/ses-comms"  onClick={handleNextPage}>Next page &rarr;</Link>
                </nav>
                </fieldset>
            </form>
           </article>
        </>
    )
}

export default SESPrivacySecuritySurvey;