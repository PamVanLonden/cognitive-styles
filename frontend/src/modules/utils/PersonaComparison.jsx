const PersonaComparison = ({ page, facet, score, abiPercent, timPercent, timImage, abiImage, patImage }) => {
  console.log(`Facet: ${facet}, Score: ${score}`); // Debugging

  // const testScore = 5; // Try a known score value
  // console.log(scorePosition(testScore)); // Check the output
  // console.log(`Facet: ${facet}, Score: ${score}`); // Debugging

  return (
    <div className="persona-comparison">
      <h3>{facet}</h3>
      <p className="comparison-bar" >
        <img 
          src={abiImage} 
          alt="Abi, Abigail, Abishek"  
          title="Abi, Abigail, Abishek"  
          className="persona-image abi" 
        />
        <span 
          className="score-marker" 
          style={{ left: timPercent }}>{abiPercent} Abi, {timPercent} Tim
        </span>


          {/* <img  src={patImage} alt="Pat, Patricia, Patrick" title="Pat, Patricia, Patrick" className="persona-image pat grayed" /> */}
          
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
