// Collect data from survey page to survey page
import { createContext, useState } from 'react';

export const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
  const [surveyData, setSurveyData] = useState({});

  const addSurveyData = (newData) => {
    setSurveyData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <SurveyContext.Provider value={{ surveyData, addSurveyData }}>
      {children}
    </SurveyContext.Provider>
  );
};
