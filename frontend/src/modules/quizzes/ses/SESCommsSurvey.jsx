import { Link } from 'react-router-dom';
import ButtonGroup from '../../utils/ButtonGroup';
import { useSurveyForm } from '../../utils/useSurveyForm'; // Import the custom hook

const SESCommsSurvey = () => {
    const { formValues, handleInputChange, handleNextPage } = useSurveyForm();

    return (
        <>
           <h2>Socioeconomic Magnification Facets Survey </h2>
           <article>
                <h3>Part 5 of 6</h3>
                <p>This part of the survey focuses on your 
                    communication related to literacy, education, and culture
                    when learning new technical skills.</p>
            <form id="survey">
                <fieldset><legend>Communication: literacy, education, culture</legend>
 
                <div className="question ">
                    <label htmlFor="clecMaterials"><span className="circle">15</span> 
                    I usually understand materials referring to country's culture, politics, celebrities, and traditions, 
                    for example, your country's idioms and cultural references. 
                    </label>
                    <ButtonGroup name="clecMaterials" onChange={handleInputChange} />
                </div> 

                <div className="question">
                    <label htmlFor="clecEducation">
                        <span className="circle">18</span> 
                        When growing up, my school provided me with high quality education.
                     </label>
                    <ButtonGroup name="clecEducation"onChange={handleInputChange} />
                </div> 

                <div className="question">
                    <label htmlFor="clecTech">
                        <span className="circle">19</span> 
                        When growing up, my school gave me lots of technology to use.
                     </label>
                    <ButtonGroup name="clecTech" onChange={handleInputChange} />
                </div>

                <div className="question">
                    <label htmlFor="clecEnglish">
                        <span className="circle">20</span> 
                        I can speak English well.
                     </label>
                    <ButtonGroup name="clecEnglish" onChange={handleInputChange} />
                </div>

                <nav className="proceed" role="navigation" aria-label="Proceed to the next most logical page.">
                   <Link to="/ses-privacy">&larr; Previous page</Link>
                   <Link to="/ses-access"  onClick={handleNextPage}>Next Page &rarr;</Link>
                </nav>
                </fieldset>
            </form>
           </article>
        </>
    )
}

export default SESCommsSurvey;