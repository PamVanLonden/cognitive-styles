// Collect data from survey page to survey page
import { createContext, useState } from 'react';

export const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
  const [surveyData, setSurveyData] = useState({
    techOptions: '', 
    sefHelpMenu: 0,
    sefWatchedSomeone: 0,
    sefNoOneHelped: 0,
    sefSomeoneHelped: 0,
    sefSomeoneShowedMe: 0,
    sefUsedSimilar: 0,
    sefNeverUsed: 0,
    sefNoConfidence: 0,
    mSuiteApps: 0,
    mSuiteLookGood: 0,
    mSuiteTester: 0,
    lsLesserKnownFeatures: 0,
    lsLookAhead: 0,
    lsUpdateSettings: 0,
    ipsGatherInfo: 0,
    ipsResearch: 0,
    ipsUnderstandDirection: 0,
    atrAvoidAdvancedSections: 0,
    atrAvoidDanger: 0,
    atrUseUnproven: 0
  });

 // Function to add/update survey data
 const addSurveyData = (fieldOrData, value) => {
  if (typeof fieldOrData === 'object') {
    // Batch update if an object is passed
    setSurveyData(prev => {
      const updatedData = { ...prev, ...fieldOrData };
      console.log('Updated surveyData:', updatedData);
      return updatedData;
    });
  } else {
    // Single field update
    setSurveyData(prev => {
      const updatedData = { ...prev, [fieldOrData]: value };
      console.log('Updated surveyData:', updatedData);
      return updatedData;
    });
  }
};

  return (
    <SurveyContext.Provider value={{ surveyData, addSurveyData }}>
      {children}
    </SurveyContext.Provider>
  );
};
