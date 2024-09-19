import { useContext, useEffect } from 'react';
import { SurveyContext }  from '../utils/SurveyContext';
import { useSurveyForm }  from '../utils/useSurveyForm'; 
import { toTitleCase }    from '../utils/Convert';
import { determinePersona, calculatePageTotal } from '../utils/surveyScore';
import  PersonaComparison  from '../utils/PersonaComparison';
import  personas  from '../data/personasObject-2';

import { Link } from 'react-router-dom';
import { useNavigation } from '../utils/NavigationContext';

// List of question names where reversal should happen
const questionsToReverse = [
  'sefNoConfidence', // 2
  'ipsResearch',     // 9
  'ipsUnderstandDirection', // 10
  'atrAvoidAdvancedSections', // 11
  'atrAvoidDanger',  // 12
  'atrUseUnproven',  // 13
];

// Function to reverse the value (calculate tens' complement)
const getReversedValue = (value) => 10 - value;

function SurveySummary() {
    //Conditional navigation to summary page:
    const { markSummaryAsVisited } = useNavigation();


    // Define surveyData 
    const { surveyData } = useContext(SurveyContext);
      console.log('Survey Data:', surveyData);

    // Access the select options chosen from techOptions
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

// Adjust totals by applying the reversal logic
const pageTotals = Object.entries(pages).reduce((totals, [page, keys]) => {
  if (!page || !keys) {
    console.error("Invalid page or keys:", { page, keys });
    return totals;
  }

  // Calculate total for the current page, applying reversal where necessary
  const total = keys.reduce((sum, key) => {
    let value = surveyData[key] || 0; // Default to 0 if no value found
    if (questionsToReverse.includes(key)) {
      value = getReversedValue(value); // Reverse the value if it's in the reversal list
    }
    return sum + value;
  }, 0);

  console.log(`Total for ${page}:`, total);  // Logging page and total

  totals[page] = total;
  return totals;
}, {});


  // const pageTotals = Object.entries(pages).reduce((totals, [page, keys]) => {
  //   if (!page || !keys) {
  //     console.error("Invalid page or keys:", { page, keys });
  //     return totals;
  //   }
    
  // const total = calculatePageTotal(keys, surveyData);
  //   console.log(`Total for ${page}:`, total);  // Logging page and total
    


    // Calculate the grand total
    const grandTotal = Object.values(pageTotals).reduce((sum, total) => sum + total, 0);


    useEffect(() => {
      markSummaryAsVisited();
    }, [markSummaryAsVisited]);

  return (
    <>
      <h2>Survey Summary</h2>
      <article>
      <p>Based on your selections on each of the survey pages, 
        your <strong>total score is: {grandTotal}</strong>. 
        Here is how your scores compare to the personas:</p>

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
              score={total}  // Use the reversed or normal total
              timImage={timImage}
              abiImage={abiImage}
              surveyData={surveyData} // Include surveyData for debugging if needed
            />
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
