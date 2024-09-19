import { useContext, useEffect } from 'react';
import { SurveyContext }  from '../utils/SurveyContext';
import { useSurveyForm }  from '../utils/useSurveyForm'; 
import { toTitleCase }    from '../utils/Convert';
import { determinePersona, calculatePageTotal } from '../utils/surveyScore';
import  PersonaComparison  from '../utils/PersonaComparison';
import  personas  from '../data/personasObject-2';

import { Link } from 'react-router-dom';
import { useNavigation } from '../utils/NavigationContext';


function SurveySummary() {
    //Conditional navigation to summary page:
    const { markSummaryAsVisited } = useNavigation();


    // Define surveyData 
    const { surveyData } = useContext(SurveyContext);
      console.log('Survey Data:', surveyData);

    // Access the selet options chosen from techOptions
    const { formValues } = useSurveyForm(); 

      
  if (!surveyData || Object.keys(surveyData).length === 0) {
    // Render an error message if surveyData is not available
    return <div>No survey data available. Please complete the survey first.</div>;
  }

  // Extract Tim and Abi's images from personaObject
  const timPersona = personas.find(persona => persona.names.includes("Tim"));
  const abiPersona = personas.find(persona => persona.names.includes("Abi"));
  
  const timImage = timPersona?.portrait;
  const abiImage = abiPersona?.portrait;


  // Define the pages and their corresponding keys for the Likert scales.
  const pages = {
    SelfEfficacy: ['sefHelpMenu', 'sefWatchedSomeone', 'sefNoOneHelped', 'sefSomeoneHelped', 'sefSomeoneShowedMe', 'sefUsedSimilar', 'sefNeverUsed', 'sefNoConfidence'], 
    Motivation: ['mSuiteApps', 'mSuiteLookGood', 'mSuiteTester'], 
    LearningStyle:  ['lsLesserKnownFeatures', 'lsLookAhead', 'lsUpdateSettings'], 
    InformationProcessingStyle: ['ipsGatherInfo', 'ipsResearch', 'ipsUnderstandDirection'], 
    AttitudeTowardsRisk: ['atrAvoidAdvancedSections', 'atrAvoidDanger', 'atrUseUnproven'] 
  };


  // Calculate totals for each page
//   const pageTotals = Object.entries(pages).reduce((totals, [page, keys]) => {
//     const total = calculatePageTotal(keys, surveyData);
//     console.log(`Total for ${page}:`, total);
//     totals[page] = total;
//     return totals;
// }, {});
const pageTotals = Object.entries(pages).reduce((totals, [page, keys]) => {
  if (!page || !keys) {
    console.error("Invalid page or keys:", { page, keys });
    return totals;
  }
  
const total = calculatePageTotal(keys, surveyData);
  console.log(`Total for ${page}:`, total);  // Logging page and total
  
  totals[page] = total;
  return totals;
}, {});


  // Calculate the grand total
  const grandTotal = Object.values(pageTotals).reduce((sum, total) => sum + total, 0);


  useEffect(() => {
    markSummaryAsVisited();
  }, [markSummaryAsVisited]);
  
// Error checking for personaComparison
  // console.log('Survey Data Keys:', Object.keys(surveyData));
  //     Object.entries(pages).forEach(([page, keys]) => {
  //       keys.forEach(key => {
  //         console.log(`${key}:`, surveyData[key]);
  //       });
  //     });

  // console.log(`Total for ${pages}:`, total);
  //     const persona = determinePersona(total, surveyData);
  //     console.log(`Persona for ${pages}:`, persona);


  return (
    <>
      <h2>Survey Summary</h2>
      <article>
      <p>Based on your selections on each of the survey pages, 
        your <strong>total score is: {grandTotal}</strong>. 
        Here is how your scores compare to the personas:</p>

        


        {/* <div className="survey-summary">
          {Object.entries(pages).map(([page, keys]) => (
            <PersonaComparison
              key={page}
              facet={toTitleCase(page)}
              score={pageTotals[page]}
              timImage={timImage}
              abiImage={abiImage}
            />
          ))}
        </div> */}

        <div className="survey-summary">
        {Object.entries(pageTotals).map(([page, total]) => {
            const persona = determinePersona(total, surveyData); // This will now return the full persona object

            if (!persona || !page || !total) {
              return null; // Skip rendering if persona, page, or total is missing
            }

            return (
              <PersonaComparison
              key={page}
              facet={toTitleCase(page)}
              score={total}
              timImage={timImage}
              abiImage={abiImage}
              surveyData={surveyData} // Include surveyData for debugging if needed
            />
            );
          })}
        </div> 


        <div className="card">
            {Object.entries(pageTotals).map(([page, total]) => {
              const persona = determinePersona(total, surveyData); // This will now return the full persona object

            if (!persona) {
              return null; // Skip rendering if no persona is found
            }

            return (
              <figure key={page}>
                <h3>{toTitleCase(page)}</h3>
                <figcaption>
                  When using <strong>{formValues.techOptions || '...'}</strong>, your {toTitleCase(page)} <strong>score is {total}</strong>, which suggests your related persona is like&nbsp;<strong>{persona.names}</strong>.
                </figcaption>
                <img src={persona.portrait} alt={persona.names} title={persona.names} />
              </figure>
            );
          })}
        </div>
      </article>

      <nav className="proceed">
        <Link to="/attitude-risk-survey">&larr; Previous page</Link>
        <Link className="off" />
      </nav>

    </>
  );
}

export default SurveySummary;
