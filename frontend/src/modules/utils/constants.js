export const SURVEY_MAX_AGREE_VALUE = 9;
export const SURVEY_MIN_AGREE_VALUE = 1;

// Define the pages and their corresponding keys for the Likert scales.
export const SURVEY_PAGES = {
  SelfEfficacy: ['sefHelpMenu', 'sefWatchedSomeone', 'sefNoOneHelped', 'sefSomeoneHelped', 'sefSomeoneShowedMe', 'sefUsedSimilar', 'sefNeverUsed', 'sefNoConfidence'], 
  Motivation: ['mSuiteApps', 'mSuiteLookGood', 'mSuiteTester'], 
  LearningStyle:  ['lsLesserKnownFeatures', 'lsLookAhead', 'lsUpdateSettings'], 
  InformationProcessingStyle: ['ipsGatherInfo', 'ipsResearch', 'ipsUnderstandDirection'], 
  AttitudeTowardsRisk: ['atrAvoidAdvancedSections', 'atrAvoidDanger', 'atrUseUnproven'], 
  AccessToTech: ['artShare', 'artReliable', 'artInternet', 'artOwn'],
  Communications: ['clecMaterials', 'clecEducation', 'clecTech', 'clecEnglish'],
  ControlAuthority: ['caMost', 'caOften', 'caHaveControl', 'caTechUnfair'],
  PrivacySecurity: ['psCameras', 'psFullName', 'psPictures', 'psDelete']
};