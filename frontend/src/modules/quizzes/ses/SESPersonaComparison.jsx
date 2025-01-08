const SESPersonaComparison = ({ facet, score,  davPercent, davImage, feeImage, feePercent  }) => {
  console.log(`Facet: ${facet}, Score: ${score}`); // Debugging

  // const testScore = 5; // Try a known score value
  // console.log(scorePosition(testScore)); // Check the output
  // console.log(`Facet: ${facet}, Score: ${score}`); // Debugging

  return (
    <div className="persona-comparison">
      <h3>{facet}</h3>
      <p className="comparison-bar" aria-label={`Comparison bar for ${facet} between Fee and Dav`}>
        
      <img 
          src={feeImage} 
          alt="Fee, Felienne, Felix"  
          title="Fee, Felienne, Felix"  
          className="persona-image fee" 
        />
        <span 
          className="score-marker" 
          style={{ left: davPercent }}
          aria-label={`Dav scored ${davPercent} percent, Fee scored ${feePercent} percent`}
        >
            {davPercent} Dav, {feePercent} Fee
        </span>


          {/* <img  src={ashImage} aria-hidden="true" className="persona-image ash grayed" alt="Ash, Asha, Ashwin" title="Ash, Asha, Ashwin"  /> */}
          <img 
          src={davImage} 
          alt="Dav, Davu, Davida"  
          title="Dav, Davu, Davida"  
          className="persona-image dav" 
        />

      </p>

    </div>
  );
};

export default SESPersonaComparison;
