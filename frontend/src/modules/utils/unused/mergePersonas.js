// utils/mergePersonas.js
import { facetMapping } from './facetMapping'; // Adjust path as needed
import personas from './personas'; // Adjust path as needed

const mergePersonasWithFacets = () => {
  return personas.map(persona => {
    // Extract the keys (question numbers) from facetMapping that match the persona's attributes
    const updatedFacets = Object.keys(facetMapping).reduce((acc, key) => {
      if (facetMapping[key].persona === persona.names.split(',')[0].trim()) { // Assuming persona name matches the key
        acc[key] = facetMapping[key];
      }
      return acc;
    }, {});

    // Merge the facets into the persona object
    return {
      ...persona,
      facets: updatedFacets
    };
  });
};

export default mergePersonasWithFacets;
