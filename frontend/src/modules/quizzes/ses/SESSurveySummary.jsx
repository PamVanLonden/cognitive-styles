import { useContext, useEffect } from 'react';
import { SurveyContext }  from '../../utils/SurveyContext';
import { useSurveyForm }  from '../../utils/useSurveyForm'; 
import { toTitleCase }    from '../../utils/Convert';
import { determinePersona } from '../../utils/surveyScore';
import  SESPersonaComparison  from './SESPersonaComparison';
import  personas  from './personasSESObject';
import { ScreenshotButton} from '../../utils/ScreenshotButton';

import { Link } from 'react-router-dom';
import { useNavigation } from '../../utils/NavigationContext';
import { SURVEY_PAGES, SURVEY_MAX_AGREE_VALUE, SURVEY_MIN_AGREE_VALUE } from '../../utils/constants';

// List of question names where reversal should happen
const questionsToReverse = [
  'sefNoConfidence', // 2
  'ipsGatherInfo',  // 9
  'ipsResearch',     // 10
  'ipsUnderstandDirection', // 11
  'atrAvoidAdvancedSections', // 12
  'atrAvoidDanger',  // 13
];

// Function to reverse the value (calculate tens' complement)
const getReversedValue = (value) => 10 - value;

function SESSurveySummary() {
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

  // Extract Dav and Fee's images from personaObject
  const feePersona = personas.find(persona => persona.names.includes("Fee"));
  const ashPersona = personas.find(persona => persona.names.includes("Ash"));
  const davPersona = personas.find(persona => persona.names.includes("Dav"));
  const feeImage = feePersona?.portrait;
  const ashImage = ashPersona?.portrait;
  const davImage = davPersona?.portrait;

  // Converts page score to a number between 0 and 1, inclusive
  const normalizedPageScore = (score, page) => {
    const maxFeePageScore = numPageResponses[page]*SURVEY_MAX_AGREE_VALUE;
    const minFeePageScore = numPageResponses[page]*SURVEY_MIN_AGREE_VALUE;
    const denominator = maxFeePageScore - minFeePageScore;
    const numerator = score - minFeePageScore;
    return numerator / denominator;
  };

  // Number of survey responses for each page
  const numPageResponses = Object.entries(SURVEY_PAGES).reduce((responseTotals, [page, keys]) => {
    if (!page || !keys) {
      console.error("Invalid page or keys:", { page, keys });
      return responseTotals;
    }

    const total = keys.reduce((sum, key) => {
      let value = surveyData[key] ? 1 : 0;
      return sum + value;
    }, 0);

    console.log(`Total number of responses for ${page}:`, total);  // Number of survey responses for the page

    responseTotals[page] = total;
    return responseTotals;
  }, {});

  // Adjust totals by applying the reversal logic
  const pageTotals = Object.entries(SURVEY_PAGES).reduce((totals, [page, keys]) => {
    if (!page || !keys) {
      console.error("Invalid page or keys:", { page, keys });
      return totals;
    }

    // Calculate total for the current page, applying reversal where necessary
    const total = keys.reduce((sum, key) => {
      let value = surveyData[key] || 0; // Default to 0 if no value found
      if (questionsToReverse.includes(key) && value) {
        value = getReversedValue(value); // Reverse the value if it's in the reversal list
      }
      return sum + value;
    }, 0);

    console.log(`Total for ${page}:`, total);  // Logging page and total

    totals[page] = total;
    return totals;
  }, {});


  // Calculate the grand total
  const grandTotal = Object.values(pageTotals).reduce((sum, total) => sum + total, 0);

  // Calculates how Dav-like and Fee-like the respondant is for current facet
  // Expects a score between 0 and 1, inclusive
  const davFeePercents = (score) => {
    const feeProportion = score;
    const davProportion = 1 - feeProportion;
    const feePercent = (feeProportion * 100).toFixed(0);
    const davPercent = (davProportion * 100).toFixed(0);
    return {
      davPercent: `${davPercent}%`,
      feePercent: `${feePercent}%`
    };
  };

  const davPercent = (score) => { return davFeePercents(score).davPercent; };
  const feePercent = (score) => { return davFeePercents(score).feePercent; };

  // Calculate how Fee-like the respondant is, across all facets for which they provided answers
  const averageFeeScore = () => {
    const { sum, count } = Object.entries(pageTotals).reduce((acc, [key, value]) => {  

        const score = normalizedPageScore(value, key);
        
        // Check if score is a valid number
        if (typeof score === 'number' && !isNaN(score)) {
            acc.sum += score; // Add score to sum
            acc.count++;      // Increment count of valid scores
        }
        
        return acc; // Return the accumulator
    }, { sum: 0, count: 0 }); // Initial accumulator with sum and count

    const averageScore = count > 0 ? sum / count : 0; // Avoid division by zero
    console.log('Total Sum:', sum); // Debugging
    console.log('Count of Pages with Valid Scores:', count); // Debugging
    console.log('Average Score:', averageScore); // Debugging
    return count > 0 ? averageScore: NaN;
  };

  useEffect(() => {
    markSummaryAsVisited();
  }, [markSummaryAsVisited]);

  return (
    <>
      <h2>Socioeconomic Magnification Survey Summary</h2>
      <article>
      <p>Based on your use of <strong>{(formValues.techOptions) || '[selection missing]'}</strong> 
        and your selections on each of the survey pages, 
        you are <strong>{davPercent(averageFeeScore())} like Dav</strong> and 
        <strong>{feePercent(averageFeeScore())} like Fee</strong>. 
          Here is how you compare to the personas for each facet:</p>

        <div className="survey-summary">
        {Object.entries(pageTotals).map(([page, total]) => {
            const persona = determinePersona(total, surveyData); // This will now return the full persona object

            if (!persona || !page || !total) {
              return null; // Skip rendering if persona, page, or total is missing
            }

            const pageScore = normalizedPageScore(total, page);

            return (
              <SESPersonaComparison
              key={page}
              page={page}
              facet={toTitleCase(page)}
              score={pageScore} // Value between 0 and 1, inclusive
              davPercent={davPercent(pageScore)}
              feePercent={feePercent(pageScore)}
              feeImage={feeImage}
              davImage={davImage}
              ashImage={ashImage}
              surveyData={surveyData} // Include surveyData for debugging if needed
            />
            );
          })}
        </div> 

        

      </article>

      <nav className="proceed" role="navigation" aria-label="Move back a page.">
        <Link to="/ses-access">&larr; Previous page</Link>
        <ScreenshotButton /> 
      </nav>

      {/* <article class="proceed continueSurvey floatRight" role="navigation" aria-label="Proceed to a new survey?" >
      <h2>There is more...</h2>
      <p>Would you like to take the <strong>Socioeconomic Status</strong> Survey?</p>
      <nav className="proceed" role="navigation" aria-label="Proceed to the next most logical page.">
        <Link to="/ses-intro" class="ses">Yes</Link>
        </nav>
      </article> */}

    </>
  );
}

export default SESSurveySummary;