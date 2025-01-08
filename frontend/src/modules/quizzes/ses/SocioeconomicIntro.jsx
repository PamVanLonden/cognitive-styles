import { useContext, useEffect, useState } from 'react';
import { useSurveyForm } from '../../utils/useSurveyForm'; 
import personasSES from './personasSESObject';
import { Link } from 'react-router-dom';
import { useNavigation } from '../../utils/NavigationContext';

function SESIntro() {
  const { markSummaryAsVisited } = useNavigation();
  const { handleNextPage } = useSurveyForm();

  useEffect(() => {
    markSummaryAsVisited();
  }, [markSummaryAsVisited]);

  return (
    <div id="ses" >
      <h2>Socioeconomic Status Survey</h2>
      <article >

         <h3>Intro</h3>
         <aside className="floatRight">
         <h3>Facets</h3>
            <p>Six facets represent different socioeconomic statuses that impact how individuals go about using technology:</p>
            <ol>
              <li>Access to reliable technology</li>
              <li>Communication literacy, education, and/or culture</li>
              <li>Attitudes toward technology risks</li>
              <li>Technology privacy and security risks</li>
              <li>Perceived control and attitude toward authority</li>
              <li>Technology self-efficacy</li>
            </ol>
            </aside>

          <p>Although inequities and biases relating to people in low socioeconomic situations 
            are starting to capture widespread attention in the popular press, 
            little attention has been given to how such inequities and biases might pervade technology user experiences. </p>
          <p>Without understanding such inequities in user experiences, technology designers can unwittingly 
            introduce inequities tied to users’ socioeconomic status (SES). 
            </p>
            
        
            <p>   
            To enable the Human Computer Interaction (HCI) community to address this problem, <a href="https://arxiv.org/abs/2108.13477" target="_blank">
              Toward a Socioeconomic-Aware HCI: Five Facets</a> (2021 Hu, et el) considers a wide body of research 
            that contributes to how a user’s socioeconomic status 
            potentially shapes their interactions and user experiences. 
            That research is organized into 20 aspects of socioeconomic status where a core of 
            six SES “facets” (attribute types and value ranges) were prevelent.
            These facets have differing impacts on user experiences for different SES strata.
            The research presented actionable paths forward for HCI researchers and practitioners to draw upon,
            to bring socioeconomic awareness to the software industry.</p>
        <p>In addition, the research use <strong>Personas</strong> to help describe a person's use of technology in relation to the facets. 
          The personas are detailed below the facets.
        </p>
        <p><Link to="/ses-survey" onClick={handleNextPage} id="survey">Complete the survey</Link> to see where your socioeconomic status 
          facets fall in a scale, when learning new technology skills.  </p>
      
        <h3>Personas</h3>
          <div className="card">
            {personasSES.map((personasSES, index) => (
                <figure key={index}>
                    <img src={personasSES.portrait} alt={`${personasSES.names} portrait`} />
                    <figcaption>
                        <h3>{personasSES.names}</h3>

                        <p><strong>Access to Reliable Tech:</strong> {personasSES.background.accessToTech}</p>
                        <p><strong>Communication Literacy:</strong> {personasSES.communicationLiteracy}</p>
                        <p><strong>Attitude Toward Risk:</strong> {personasSES.attitudeTowardRisk.description}</p>
                        <p><strong>Tech Privacy and Security:</strong> {personasSES.privacySecurity}</p>
                        <p><strong>Perceived Control and Attitude Toward Authority:</strong> {personasSES.perceivedControlAuthority}</p>
                        <p><strong>Tech Self-Efficacy:</strong> {personasSES.techSelfEfficacy.description}</p>

                        {/* <p><strong>Background:</strong> {personasSES.background.employment}</p>
                        <p><strong>Email Style:</strong> {personasSES.Email}</p>
                        <p><strong>Motivations:</strong> {personasSES.motivationsAttitudes.description}</p> */}

                        {/* <p><strong>Info Processing Style:</strong> {personasSES.infoProcessingStyle.description}</p> */}
                        {/* <p><strong>Learning Style:</strong> {personasSES.learningStyle.learningDescription}</p>
                        <p><strong>Summary:</strong> {personasSES.summarySimple}</p> */}
                    </figcaption>
                </figure>
              ))}
          </div>
        </article>

        <nav className="proceed" role="navigation" aria-label="Proceed to the next most logical page.">
          <Link to="/survey-summary">&larr; Previous Survey</Link>
          <Link to="/ses-slider" onClick={handleNextPage} id="survey">Slider Survey &rarr;</Link>
          <Link to="/ses-selfefficacy" onClick={handleNextPage} id="survey">Take SES Survey &rarr;</Link>
        </nav>
    </div>
  );
}

export default SESIntro;