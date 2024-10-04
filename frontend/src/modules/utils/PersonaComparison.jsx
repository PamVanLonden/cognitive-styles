const PersonaComparison = ({ facet, score, abiPercent, timPercent, timImage, abiImage, patImage }) => {
  console.log(`Facet: ${facet}, Score: ${score}`); // Debugging

  // const testScore = 5; // Try a known score value
  // console.log(scorePosition(testScore)); // Check the output
  // console.log(`Facet: ${facet}, Score: ${score}`); // Debugging

  return (
    <div className="persona-comparison">
      <h3>{facet}</h3>
      <p className="comparison-bar" aria-label={`Comparison bar for ${facet} between Abi and Tim`}>
        <img 
          src={abiImage} 
          alt="Abi, Abigail, Abishek"  
          title="Abi, Abigail, Abishek"  
          className="persona-image abi" 
        />
        <span 
          className="score-marker" 
          style={{ left: timPercent }}
          aria-label={`Abi scored ${abiPercent} percent, Tim scored ${timPercent} percent`}
        >
            {abiPercent} Abi, {timPercent} Tim
        </span>


          {/* <img  src={patImage} aria-hidden="true" className="persona-image pat grayed" alt="Pat, Patricia, Patrick" title="Pat, Patricia, Patrick"  /> */}
          
          <img 
            src={timImage} 
            alt="Tim, Timara, Timothy"  
            title="Tim, Timara, Timothy" 
            className="persona-image tim" 
          />

      </p>

    </div>
  );
};

export default PersonaComparison;
