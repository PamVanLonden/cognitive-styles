import { useContext, useEffect, useState } from 'react';
import { SurveyContext } from '../../utils/SurveyContext';
import { useSurveyForm } from '../../utils/useSurveyForm'; 
import personasSES from './personasSESObject';
import { ScreenshotButton } from '../../utils/ScreenshotButton';
import { Link } from 'react-router-dom';
import { useNavigation } from '../../utils/NavigationContext';

function SESSliderSurvey() {
  const { markSummaryAsVisited } = useNavigation();
  
  const [sliderValues, setSliderValues] = useState({
    reliableTech: 0,
    comLiteracy: 0,
    attitudeRisk: 0,
    privacySecurity: 0,
    controlAuthority: 0,
    sesSelfEfficacy: 0
  });

  const handleSliderChange = (event) => {
    const { id, value } = event.target;
    setSliderValues((prevValues) => ({
      ...prevValues,
      [id]: parseFloat(value)
    }));
  };

  useEffect(() => {
    markSummaryAsVisited();
  }, [markSummaryAsVisited]);

  // Extract Dav's image from personaSESObject
  // AND the other persona?
  //const davPersona = personasSES.find(personasSES => personasSES.names.includes("Dav"));


  return (
    <div id="ses" >
      <h2>Socioeconomic Status Survey</h2>
      <article id="ses">
        <h3>Survey of Facets</h3>
          <p>Slide the dots below to represent where you fit between each facet:  
        </p>
        <form>
      <fieldset>
        <legend>Access to Reliable Technology</legend>
        <h3>I have...</h3>
            <label htmlFor="reliableTech">
                <span className="sliderLabelLeft">spotty access</span>
                <input type="range" 
                    min="-5" max="5" 
                    className="slider" id="reliableTech"
                    value={sliderValues.reliableTech} onChange={handleSliderChange}
                 />
                  <div id=".slider-container">
                    <img className="slider-thumb-svg" src="images/sliderThumb.svg" alt="decoration;" />
                  </div>
                <span className="sliderLabelRight">high access</span>
            </label>
     </fieldset>

        <fieldset>
        <legend>Communication Literacy/Education/Culture</legend>
        <h3>Relative to peers, it is...</h3>
            <label htmlFor="comLiteracy">
                <span className="sliderLabelLeft">lower </span>
                <input type="range" 
                    min="-5" max="5" 
                    className="slider" id="comLiteracy"
                    value={sliderValues.comLiteracy} onChange={handleSliderChange}
                    />
                <span className="sliderLabelRight">higher</span>
            </label>
        </fieldset>

        <fieldset>
        <legend>Attitudes toward Technology Risks</legend>
        <h3>I am...</h3>
            <label htmlFor="attitudeRisk">
                <span className="sliderLabelLeft">risk-averse</span>
                <input type="range" 
                    min="-5" max="5" 
                    className="slider" id="attitudeRisk"
                    value={sliderValues.attitudeRisk} onChange={handleSliderChange}
                    />
                <span className="sliderLabelRight">risk-tolerant</span>
            </label>
       </fieldset>

        <fieldset>
        <legend>Technology Privacy and Security</legend>
          <h3>For me, using tech is...</h3>
            <label htmlFor="privacySecurity">
                <span className="sliderLabelLeft">high risk</span>
                <input type="range" 
                    min="-5" max="5" 
                    className="slider" id="privacySecurity"
                    value={sliderValues.privacySecurity} onChange={handleSliderChange} 
                    />
                <span className="sliderLabelRight">low risk</span>
            </label>

            </fieldset>

        <fieldset>
        <legend>Perceived Control and Attitude Toward Authority </legend>
            <h3>Output from technology...</h3>
            <label htmlFor="controlAuthority">
                <span className="sliderLabelLeft">cannot be challenged or changed</span>
                <input type="range" 
                    min="-5" max="5" 
                    className="slider" id="controlAuthority"
                    value={sliderValues.controlAuthority} onChange={handleSliderChange} 
                    />
                <span className="sliderLabelRight">can be challenged or changed</span>
            </label>
 
            </fieldset>

        <fieldset>
        <legend>Technology Self-Efficacy</legend>
            <h3>Relative to peers, it is...</h3>
            <label htmlFor="sesSelfEfficacy">
                <span className="sliderLabelLeft">lower </span>
                <input type="range" 
                    min="-5" max="5" 
                    className="slider" id="sesSelfEfficacy"
                    value={sliderValues.sesSelfEfficacy} onChange={handleSliderChange}
                    />
                   
                <span className="sliderLabelRight">higher </span>
            </label>
        </fieldset>
        </form>


        </article>

        <nav className="proceed" role="navigation" aria-label="Proceed to the next most logical page.">
          <Link to="/ses-intro">&larr; Intro</Link>
          <ScreenshotButton />
        </nav>
    </div>
  );
}

export default SESSliderSurvey;