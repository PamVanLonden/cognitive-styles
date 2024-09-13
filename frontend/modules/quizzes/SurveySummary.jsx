import { useContext } from 'react';
import { SurveyContext } from '../utils/SurveyContext';
import { toTitleCase } from '../utils/Convert';
import { Link } from 'react-router-dom';

function SurveySummary() {
  const { surveyData } = useContext(SurveyContext);
  console.log('Survey Data:', surveyData);


  // const sortedSurveyData = Object.entries(surveyData)
  //   .sort((a, b) => a[0].localeCompare(b[0])) // Sort the keys alphabetically
  //   .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {} // Convert back to an object
  // ); 
 
   // Define the pages and their corresponding keys.
   const pages = {
    SelfEfficacy: ['sefappSelection', 'sefEmailHelp', 'sefEmailWatched', 'sefEmailNoOne', 'sefEmailSomeoneHelped', 'sefEmailShown', 'sefEmailSimilar', 'sefEmailNever', 'sefEmailConfidence'], 
    Motivation: ['mSuiteApps', 'mSuiteAppsRating', 'mSuiteLookGood', 'mSuiteTester'], 
    LearningStyle:  ['lsSpreadsheets', 'lsSpreadsheetsRating', 'lsSpreadsheetExplore', 'lsSpreadsheetCustomize'], 
    InformationProcessingStyle: ['ipsGatherInfo', 'ipsResearch', 'ipsUnderstandDirection'], 
    AttitudeTowardsRisk: ['atrAvoidAdvancedSections', 'atrAvoidAdvancedSectionsRatings', 'atrAvoidDanger', 'atrUseUnproven'] 
  };

// Calculate total for a given page
const calculatePageTotal = (keys) => 
  keys
    .map(key => {
      const value = surveyData[key];
      // Check if value is a number or can be converted to a number
      const numericValue = !isNaN(value) ? Number(value) : 0; // Convert valid numeric strings, default others to 0
      return numericValue;
    })
    .reduce((acc, val) => acc + val, 0); // Sum the values

// Calculate totals for each page
const pageTotals = Object.entries(pages).reduce((totals, [page, keys]) => {
  const total = calculatePageTotal(keys);
  console.log(`Total for ${page}:`, total); // Log each page total
  totals[page] = total;
  return totals;
}, {});

// Calculate the grand total
const grandTotal = Object.values(pageTotals).reduce((sum, total) => sum + total, 0);

// Extract selected software/hardware values from surveyData
const { 
  sefAppSelection, 
  mSuiteApps, 
  lsSpreadsheets, 
  atrAvoidAdvancedSections 
} = surveyData;

  return (
    <>
      <h2>Survey Summary</h2>

       <p>Based on your selections on each of the survey pages, 
        your <strong>total score is: {grandTotal}</strong></p>
       <ol>{/* Display page totals */}
          {Object.entries(pageTotals).map(([page, total]) => (
              <li key={page}>
                {toTitleCase(page)} Total: {total}
              </li>
            ))}
      </ol>
 

    
      <p>Selected choices were 
        {sefAppSelection || "Not selected"}, 
        {mSuiteApps || "Not selected"}, 
        {lsSpreadsheets || "Not selected"}, 
        {atrAvoidAdvancedSections || "Not selected"}
      </p>
   
      <nav className="proceed">
              <button >
                  <Link to="/attitude-risk-survey">&larr; Previous page</Link>
              </button>
              <button class="off"></button>
          </nav>

    </>
  );
}

export default SurveySummary;