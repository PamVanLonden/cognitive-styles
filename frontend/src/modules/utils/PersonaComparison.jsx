/* As per Margaret

Self-Eff: Tim-pic —— O ———————— — Abi-pic
Motivations: Tim-pic. ————— O —————— Abi-pic.
Learning Style: Tim-pic —— O ———————— — Abi-pic
Information Processing: Tim-pic —— O ———————— — Abi-pic
Attitude Risk: Tim-pic —————————— — O - Abi-pic

*/

const PersonaComparison = ({ facet, score, timImage, abiImage, patImage }) => {
  console.log(`Facet: ${facet}, Score: ${score}`); // Debugging

  const scorePosition = (score) => {
    console.log(`Score: ${score}`); // Debugging
    const clampedScore = Math.max(1, Math.min(score, 9)); // Ensure score is within 1-9
    const position = ((clampedScore - 1) / 8) * 80; // Scale to width used in the stylesheet. 
    console.log(`Position: ${position}%`);
    return `${position}%`;
  };

    // const testScore = 5; // Try a known score value
    // console.log(scorePosition(testScore)); // Check the output

    return (
      <div className="persona-comparison">
        <h3>{facet}</h3>
        <p className="comparison-bar" >
          <img src={abiImage} alt="Abi, Abigail, Abishek"  title="Abi, Abigail, Abishek"  className="persona-image abi" />
          <span className="score-marker" style={{ left: scorePosition(score) }}>{score}</span>
            <img  src={patImage} 
                  alt="Pat, Patricia, Patrick" 
                  title="Pat, Patricia, Patrick" 
                  className="persona-image pat grayed" 
              />
            <img src={timImage} alt="Tim, Timara, Timothy"  title="Tim, Timara, Timothy" className="persona-image tim" />

        </p>

      </div>
    );
  };
  
  export default PersonaComparison;