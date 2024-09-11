import  facets  from './facetsObject';

const FacetsPage = () => {
    const facetDefinitions = facets[0].facetDefinitions;

    return (
      <>
      <h2>Facets</h2>
      <p>Description</p>
      <article class="card">
        {Object.keys(facetDefinitions).map((facetKey, index) => {
          const facet = facetDefinitions[facetKey]; // Main facet (motivations, InformationProcessingStyle, etc.)
          return (
            <figure key={index}>
              <h3>{facetKey} <span class="smaller">{facet.description}</span></h3>
              <figcaption></figcaption>
              
              {/* Nested map for facet values */}
              {Object.keys(facet.facetValues).map((valueKey, valueIndex) => {
                const value = facet.facetValues[valueKey]; // Facet values (taskCompletion, techInterest, etc.)
                return (
                  <dl key={valueIndex}>
                    <dt>{valueKey}</dt>
                    <dd><strong>Description:</strong> {value.description}</dd>
                    <dd><strong>Example:</strong> {value.example}</dd>
                  </dl>
                );
              })}
            </figure>
         
          );
        })}
           </article>
      </>
    );
  };

export default FacetsPage;