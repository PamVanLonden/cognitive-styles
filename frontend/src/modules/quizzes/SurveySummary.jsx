import { useContext } from 'react';
import { SurveyContext } from '../utils/SurveyContext';

function SurveySummary() {
  const { surveyData } = useContext(SurveyContext);

  return (
    <div>
      <h2>Survey Summary</h2>
      <pre>{JSON.stringify(surveyData, null, 2)}</pre>
      {/* You can format the summary output as needed */}
    </div>
  );
}

export default SurveySummary;