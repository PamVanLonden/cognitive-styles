import { useContext } from 'react';
import { SurveyContext } from '../utils/SurveyContext';
import { toTitleCase } from '../utils/Convert';

function SurveySummary() {
  const { surveyData } = useContext(SurveyContext);
  console.log('Survey Data:', surveyData);


  // const sortedSurveyData = Object.entries(surveyData)
  //   .sort((a, b) => a[0].localeCompare(b[0])) // Sort the keys alphabetically
  //   .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {} // Convert back to an object
  // ); 
 
   // Define the pages and their corresponding keys.
   const pages = {
    SelfEfficacy: ['sEFEmailHelp', 'sEFEmailWatched', 'sEFEmailNoOne', 'sEFEmailSomeoneHelped', 'sEFEmailShown', 'sEFEmailSimilar', 'sEFEmailNever', 'sEFEmailConfidence'], 
    Motivation: ['mSuiteApps', 'mSuiteLookGood', 'mSuiteTester'], 
    LearningStyle:  ['lsSpreadsheets', 'lsSpreadsheetExplore', 'lsSpreadsheetCustomize'], 
    InformationProcessingStyle: ['ipsGatherInfo', 'ipsResearch', 'ipsUnderstandDirection'], 
    AttitudeTowardsRisk: ['atrAvoidAdvancedSections', 'atrAvoidDanger', 'atrUseUnproven'] 
  };

// Calculate total for a given page
const calculatePageTotal = (keys) => 
  keys
    .map(key => {
      const value = surveyData[key];
      return value !== undefined ? Number(value) : 0; // Convert to number or default to 0
    })
    .reduce((sum, value) => (isNaN(value) ? sum : sum + value), 0);

// Calculate totals for each page
const pageTotals = Object.entries(pages).reduce((totals, [page, keys]) => {
  const total = calculatePageTotal(keys);
  console.log(`Total for ${page}:`, total); // Log each page total
  totals[page] = total;
  return totals;
}, {});

// Calculate the grand total
const grandTotal = Object.values(pageTotals).reduce((sum, total) => sum + total, 0);

  return (
    <>
      <h2>Survey Summary</h2>

       <p>Based on your selections on each of the survey pages, your total score is:</p>
       <ol>{/* Display page totals */}
          {Object.entries(pageTotals).map(([page, total]) => (
              <li key={page}>
                {toTitleCase(page)} Total: {total}
              </li>
            ))}
      </ol>
      <p>Total Score: {grandTotal}</p> 

<p></p>
    </>
  );
}

export default SurveySummary;