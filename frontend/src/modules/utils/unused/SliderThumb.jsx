const SliderThumb = ({ id, min, max, value, onChange }) => {
  // Calculate the thumb position based on the slider value
  const thumbPosition = ((value - min) / (max - min)) * 100;

  return (
    <div className="slider-container" style={{ position: "relative" }}>
      <input 
        type="range" 
        id={id}  
        min={min} 
        max={max} 
        value={value} 
        onChange={onChange} 
        className="slider" 
        style={{ width: '100%' }}  
      />
 
      <div 
        className="slider-thumb" 
        style={{
          left: `${thumbPosition}%`,  // Dynamically position the thumb
          backgroundColor: "#9251a0", 
          width: "40px", 
          height: "40px", 
          borderRadius: "50%", 
          position: "absolute", 
          top: "-10px",
          transform: "translateX(-50%)",
        }} 
      />
    </div>
  );
};

export default SliderThumb;
