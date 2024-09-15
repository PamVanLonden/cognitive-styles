import { useContext } from 'react';
import { SurveyContext } from '../utils/SurveyContext';
import { useSurveyForm } from '../utils/useSurveyForm'; // Adjust path as needed
import { toTitleCase } from '../utils/Convert';
import { Link } from 'react-router-dom';

function SurveySummary() {
  const { surveyData } = useContext(SurveyContext);
  const { formValues } = useSurveyForm(); // Access the selet options chosen from techOptions

  // Define the pages and their corresponding keys for the Likert scales.
  const pages = {
    SelfEfficacy: ['sefEmailHelp', 'sefEmailHelpRating', 'sefEmailWatched', 'sefEmailNoOne', 'sefEmailSomeoneHelped', 'sefEmailShown', 'sefEmailSimilar', 'sefEmailNever', 'sefEmailConfidence'], 
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
        const numericValue = !isNaN(value) ? Number(value) : 0; 
        return numericValue;
      })
      .reduce((acc, val) => acc + val, 0);

  // Calculate totals for each page
  const pageTotals = Object.entries(pages).reduce((totals, [page, keys]) => {
    const total = calculatePageTotal(keys);
    console.log(`Total for ${page}:`, total);
    totals[page] = total;
    return totals;
  }, {});

  // Calculate the grand total
  const grandTotal = Object.values(pageTotals).reduce((sum, total) => sum + total, 0);



// TO ADD:
// If score for each is __ then display persona details.

  return (
    <>
      <h2>Survey Summary</h2>
      <article>
      <p>Based on your selections on each of the survey pages, 
        your <strong>total score is: {grandTotal}</strong>. 
        Here is your written summary:</p>

     
        <div className="card">
          {Object.entries(pageTotals).map(([page, total]) => (
            <figure key={page}>
              <h3>{toTitleCase(page)}</h3>
              <figcaption>
                When using <strong>{formValues.techOptions || '...'}</strong>, 
                your {toTitleCase(page)} <strong>score is {total}</strong>,
                which suggests your related persona is like <strong>[add persona]</strong>.
              </figcaption>
              <img src="" alt="" title="" />
            </figure>
          ))}
        </div>
      </article>

      <nav className="proceed">
        <button>
          <Link to="/attitude-risk-survey">&larr; Previous page</Link>
        </button>
        <button className="off"></button>
      </nav>

     
    </>
  );
}

export default SurveySummary;
