
// Determines the closest persona based on the total score
import personas from '../data/personasObject-2';  

const pageAvg = {
    SelfEfficacy: 40, 
    Motivation: 15, 
    LearningStyle:  15, 
    InformationProcessingStyle: 15, 
    AttitudeTowardsRisk: 15 
  };

// Determines if score is Tim-like, Abi-like, or Pat-like
export const determineTag = (score) => {
    if (score <= pageAvg[facet]) return 'Tim-like';      // Agreeing with statements (closer to 1-4)
    if (score >= pageAvg[facet]) return 'Abi-like';      // Disagreeing (closer to 6-9)
    return 'Pat-like';                      // Neutral response in the middle
};


// Determines the closest persona based on the total score
export const determinePersona = (totalScore, surveyData) => {
    let closestPersona = 'Unknown';
    let smallestDifference = Infinity;

    // Define surveyData and set default
    surveyData = surveyData || {};  

    // Iterate through each persona in the array
    personas.forEach((persona) => {
        
        // Initialize an object to store differences for each facet
        let facetDifferences = {};
         // Iterate through each facet to find the average score
         Object.entries(persona.facetScores).forEach(([facet, questions]) => {
            const facetScores = questions.map((question) => surveyData[question] !== undefined ? surveyData[question] : 0); 

            const avgFacetScore = facetScores.length > 0
                ? facetScores.reduce((a, b) => a + b, 0) / facetScores.length
                : 0;

            // Store the difference for comparison
            facetDifferences[facet] = Math.abs(avgFacetScore - totalScore);
        });

        // Here, you can decide how to aggregate the differences 
        const totalDifference = Object.values(facetDifferences).reduce((acc, diff) => acc + diff, 0);
        
        // Update the closest persona if the current difference is smaller
        if (totalDifference < smallestDifference) {
            smallestDifference = totalDifference;
            closestPersona = persona; // Adjust this if you want a different name or property
        }
        // // Iterate through each facet to find the average score
        // Object.entries(persona.facetScores).forEach(([facet, questions]) => {
        //     // Retrieve the facet scores from the questions
        //     const facetScores = questions.map((question) => {
        //         // Pass surveyData and Handle undefined keys
        //        return surveyData[question] !== undefined ? surveyData[question] : 0; 
        //     });

        //     // Compute the average score for the facet
        //     const avgFacetScore = facetScores.length > 0
        //         ? facetScores.reduce((a, b) => a + b, 0) / facetScores.length
        //         : 0;

        //     // Calculate the difference between the persona's average facet score and the total score
        //     const difference = Math.abs(totalScore - avgFacetScore);

        //     // Update the closest persona if the current difference is smaller
        //     if (difference < smallestDifference) {
        //         smallestDifference = difference;
        //         closestPersona = persona; // Adjust this if you want a different name or property
        //     }
        // });
    });

    return closestPersona;
};


// Ensure all surveyData keys exist in the calculation
export const calculatePageTotal = (keys, surveyData) =>
    keys
      .map(key => surveyData?.[key] ?? 0) // Default to 0 if key does not exist
      .reduce((acc, val) => acc + val, 0);


// Assign facet tags based on responses
export const assignFacetTags = (responses) => {
    const tags = {};
    
    personas.forEach((persona) => {
        Object.entries(persona.facetScores).forEach(([facet, questions]) => {
            const facetScores = questions.map((q) => responses[q] || 0);
            const avgScore = facetScores.length > 0
                ? facetScores.reduce((a, b) => a + b, 0) / facetScores.length
                : 0;
            tags[facet] = determineTag(facet, avgScore);
        });
    });

    return tags;
};
