/* As per Margaret

Self-Eff: Tim-pic —— O ———————— — Abi-pic
Motivations: Tim-pic. ————— O —————— Abi-pic.
Learning Style: Tim-pic —— O ———————— — Abi-pic
Information Processing: Tim-pic —— O ———————— — Abi-pic
Attitude Risk: Tim-pic —————————— — O - Abi-pic

*/

const PersonaComparison = ({ facet, score, timImage, abiImage }) => {
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
            <img src={timImage} alt="Tim" className="persona-image tim" />
            <span className="score-marker" style={{ left: scorePosition(score) }}>{score}</span>
            <img src={abiImage} alt="Abi" className="persona-image abi" />
        </p>

      </div>
    );
  };
  
  export default PersonaComparison;