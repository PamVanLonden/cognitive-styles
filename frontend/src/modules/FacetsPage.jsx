import  facets  from './facetsObject';
import { toTitleCase } from './utils/Convert';

const FacetsPage = () => {
    const facetDefinitions = facets[0].facetDefinitions;

    return (
      <>
      <h2>Facets</h2>
      <p>Five facets represent different cognitive styles that impact how individuals go about using technology:
        </p>
        <ol>
          <li>Self-efficacy</li>
          <li>Motivation</li>
          <li>Information processing</li>
          <li>Learning style</li>
          <li>Attitude toward risk</li>
        </ol>
      <p>The GenderMag facet survey has become a diversity measurement method 
      based on an evidence-based inclusivity evaluation method. 
      Software practitioners use that method to find and fix inclusivity bugs. 
      The differences between how people use technology tends to cluster by gender, 
      which informs our understanding of diversity gaps in technology hardware and software.
       &nbsp;<cite>(<a href="https://web.engr.oregonstate.edu/~burnett/Reprints/diversityBook-2024.pdf">
        Burnett, et al</a>, 2021, PDF)</cite>
      </p>

      <p>The following is an overview of each facet:</p>
      <article class="card">
        {Object.keys(facetDefinitions).map((facetKey, index) => {
          const facet = facetDefinitions[facetKey]; // Main facet (motivations, InformationProcessingStyle, etc.)
          return (
            <figure key={index}>
              <h3>{toTitleCase(facetKey)} <br /><span class="smaller">{facet.description}</span></h3>
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